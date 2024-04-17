import CovidConsent from './components/covid-consent/covid-consent'
import NPForm from './components/np-form/np-form'
import npFormContext, {NPFormProvider} from './context/np-form-context'


import { PDFViewer, Page, Text, View, Document, StyleSheet  } from '@react-pdf/renderer';
import './App.css';

function App() {
  console.log(npFormContext)
  let dude = false;
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4',
    }, 
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    },
    viewer: {
      width: '100%',
      height: '100vh'
    }
  });

  return (
    <>
      <NPFormProvider>
        {!dude && <NPForm />}
      {dude && 
      <PDFViewer style={styles.viewer}>
        <Document pageMode='useNone'>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>Section #1</Text>
            </View>
            <View style={styles.section}>
              <Text>Section #2</Text>
            </View>
          </Page> 
        </Document>
      </PDFViewer>
      }
      
      </NPFormProvider>
      
    </>
  )
}

export default App
/**
 
1. home page
2. covid consent form
    2 pages
3. new patient form
    4 pages
4. at the bottom put canvas signature
5. use pdf library to put all form data onto a pdf
6. fax api to mom's fax

Each form has submit function 
  - for now email pdf form to joyplace15@gmail.com
  - endgame perhaps submitting will:
      1. create pdf
      2. fax to mom
 */
