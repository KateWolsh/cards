import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <Card image='https://images.ctfassets.net/hrltx12pl8hq/oJT2tmFSpKoUAvhbuuZIS/57ab10b9a15e5843580ae05c272d27d0/thumb_creativerends_01_fantastic.jpg?fit=fill&w=240&h=135&fm=webp'
        title='Мечи'
        button={{ text: 'Смотреть подробно', link: '' }}
      >
        <div>
          Очень красивый острый меч
        </div>
      </Card>
      <Card
        title='Шлем'
        button={{ text: 'Смотреть подробно', link: '' }}
      >
        <div>
          Шлем металлический, как у рыцарей 
        </div>
      </Card>
    </>

  )
}

export default App
