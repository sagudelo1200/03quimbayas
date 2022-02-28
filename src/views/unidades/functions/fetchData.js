import { db } from 'firebaseApp'
import { collection, getDocs, doc, getDoc } from 'firebase/firestore'


const fetchData = async (unidad) => {
  let data = {}
  let integrantes = []
  try {
    const docRef = doc(db, `unidades/${unidad}`)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      data = {
        ...docSnap.data(),
        id: docSnap.id,
      }
    }
    const querySnap = await getDocs(collection(db, `unidades/${unidad}/integrantes`))
    querySnap.forEach(doc => {
      integrantes = [
        ...integrantes,
        {
          ...doc.data(),
          id: doc.id,
        }
      ]
    })
  } catch (error) {
    console.log(error)
  }


  return {
    data,
    integrantes: integrantes.length,
  }
}


export default fetchData
