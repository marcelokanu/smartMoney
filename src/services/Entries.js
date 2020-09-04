import { Alert } from 'react-native'
import { getRealm } from './Realm'

export const saveEntry = async () => {
  const realm = await getRealm()

  let data = {}

  try {
    realm.write(() => {
      data = {
        id: 'ABC',
        amount: 12.4,
        entryAt: new Date(),
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
