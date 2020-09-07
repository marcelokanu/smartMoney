import { Alert } from 'react-native'

import { getRealm } from './Realm'

import getUUID from '../services/UUID'

export const getEntries = async () => {
  const realm = await getRealm()

  const entries = realm.objects('Entry')

  console.log('getEntries :: entries > ' + JSON.stringify(entries))

  return entries
}

export const saveEntry = async (value, entry = {}) => {
  const realm = await getRealm()

  let data = {}

  try {
    realm.write(() => {
      data = {
        id: value.id || entry.id || getUUID(),
        amount: value.amount || entry.amount,
        entryAt: value.entryAt || entry.entryAt,
        isInit: false
      }

      //Entidade, dados para gravar, atualizar caso haja id (true or false)
      realm.create('Entry', data, true)
    })

    console.log({ origin: 'saveEntry', data })
  } catch (error) {
    console.error('saveEntry :: error on save object: ', JSON.stringify(data))
    Alert.alert('Erro ao salvar os dados')
  }

  return data
}
