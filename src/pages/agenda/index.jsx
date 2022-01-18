import Layout from '../../components/template'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import 'moment/locale/pt-br';

// import './style.css'

const localizer = momentLocalizer(moment)


const Agenda = (props) => {

  const messages = {
    allDay: 'Dia Inteiro',
    previous: '<',
    next: '>',
    today: 'Hoje',
    month: 'Mês',
    week: 'Semana',
    day: 'Dia',
    agenda: 'Agenda',
    date: 'Data',
    time: 'Hora',
    event: 'Evento',
  }

  return (
    <Layout>
      <Calendar
        className='teste'
        messages={messages}
        localizer={localizer}
        events = {[
          {
            title: 'Primeiro Evento',
            allDay: false,
            start: moment().toDate(),
            end: moment().add(30, 'minutes').toDate()
          },
          {
            title: 'Segundo Evento',
            allDay: false,
            start: moment().toDate(),
            end: moment().add(30, 'minutes').toDate()
          }
        ]}
        selectable
        popup
        views={['month', 'day', 'week']}
        defaultView='week'
        style={{ height: 600 }}
      />
    </Layout>
  )
}

export default Agenda