import Realm from 'realm'

import EntrySchema from '../schemas/EntrySchema'
import CategorySchema from '../schemas/CategorySchema'

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [EntrySchema, CategorySchema],
    schemaVersion: 1
  })

  return realm
}
