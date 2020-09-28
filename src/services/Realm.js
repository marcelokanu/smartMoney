import Realm from 'realm'

import CategorySchema from '../schemas/CategorySchema'
import EntrySchema from '../schemas/EntrySchema'

import { getDefaultCategories } from './Categories'

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [CategorySchema, EntrySchema],
    schemaVersion: 2
  })

  initDB(realm)

  return realm
}

export const initDB = (realm) => {
  const categoriesLength = realm.objects('Category').length
  console.log(`InitDB :: categories length: ${categoriesLength}`)

  if (categoriesLength === 0) {
    const categories = getDefaultCategories()

    console.log(`initDB :: initing db...`)

    try {
      realm.write(() => {
        categories.forEach((category) => {
          console.log(`initDB :: creating category ${JSON.stringify(category)}`)

          realm.create('Category', category, true)
        })
      })
    } catch (error) {
      console.log(`initDB :: error ${error}`)
    }
  } else {
    console.log(`initDB :: categories already existing... Skyping...`)
  }
}

export const dropDB = (realm) => {
  console.log('dropDB :: droping db...')

  realm.write(() => {
    realm.deleteAll()
  })
}
