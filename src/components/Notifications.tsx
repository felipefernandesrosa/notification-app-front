import useSWR from "swr";
import * as process from 'process'
import {Col, Container, Row, Table, Button} from 'react-bootstrap'
// @ts-ignore
const fetcher = (...args: any) => fetch(...args).then((res) => res.json())

interface Notifications {
  id: number,
  message: string,
  subscribed: [],
  channels: [],
}

export default () => {
  const { data, error } = useSWR(process.env.NEXT_PUBLIC_API_URL+"/notifications", fetcher)

  if (error) return <div>Error fetching data</div>
  if (!data) return <div>Loading...</div>

  return <>
    <Container>
      <Row>
        <Col>
          <h2 className="mb-4">Notifications</h2>
          <Button className="float-end mb-3" href="notifications/create">Create</Button>
          <Table striped bordered hover>
            <thead>
              <th>Message</th>
              <th>Category</th>
              <th>Channels</th>
            </thead>
            <tbody>
              {data.map((item: Notifications) => (
                <tr>
                  <td>{item['message']}</td>
                  <td>{Array(item['subscribed']).map((value) => value+',')}</td>
                  <td>{Array(item['channels']).map((value) => value+',')}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  </>
}