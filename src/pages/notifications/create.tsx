import { useFormik } from "formik"
import {getNotifications, getClients, createNotification} from '@/api'
import createNotificationSchema from '@/_schema/createNotification'
import {useRouter} from 'next/router'
import {useEffect, useState} from "react"
import {Col, Container, Row, Form, Button} from 'react-bootstrap'
import Header from "@/components/Header";

export default() =>
{
  const [clients, setClients] = useState([])
  const router = useRouter()

  useEffect(() => {
    dispatchFetchClients()
  }, [])

  const dispatchFetchClients = () => {
    getClients().then((response: object) => {
      setClients(response.data)
    })
  }
  const dispatchFetchCreateSignature = (params: object) => {
    createNotification(params).then((params: object) => {
      router.push("/")
    })
  }

  const formik = useFormik({
    initialValues: {
      client_id: '',
      subscribed: [],
      message: '',
    },
    validationSchema: createNotificationSchema,
    onSubmit: (values, { setStatus, setErrors, setSubmitting }) => {
      dispatchFetchCreateSignature(values)
    },
  });

  return <>
    <Header />
    <Container>
      <Row>
        <Col>
          <h2 className="mb-4">Create Notification</h2>

          <Form className="form form-label-right" autoComplete="off" onSubmit={formik.handleSubmit} variant="outlined">
            <Form.Group className="mb-3" controlId="formClient">
              <Form.Label>Choose a client </Form.Label>
              <Form.Select
                    name="client_id"
                    {...formik.getFieldProps("client_id")}
                >
                  <option>Choose a client</option>
                  {clients.map((client) => <option key={client.id} value={client.id}>{client.name}</option>)}
              </Form.Select>

              {formik.touched.client_id && formik.errors.client_id ? (
                <Form.Control.Feedback className="d-block" type="invalid">
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">{formik.errors.client_id}</div>
                </div>
                </Form.Control.Feedback>
              ) : null}

            </Form.Group>

            <Form.Group className="mb-3" controlId="formCategory">
              <Form.Label>Choose category </Form.Label>
              <Form.Select name="subscribed" multiple {...formik.getFieldProps("subscribed")}>
                <option key="sports" value="sports">Sports</option>
                <option key="finance" value="finance">Finance</option>
                <option key="movies" value="movies">Movies</option>
              </Form.Select>
              {formik.touched.subscribed && formik.errors.subscribed ? (
                <Form.Control.Feedback className="d-block" type="invalid">
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block">{formik.errors.subscribed}</div>
                  </div>
                </Form.Control.Feedback>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Write a message </Form.Label>
              <Form.Control type="text" name="message" {...formik.getFieldProps("message")}></Form.Control>
              {formik.touched.message && formik.errors.message ? (
                <Form.Control.Feedback className="d-block" type="invalid">
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block">{formik.errors.message}</div>
                  </div>
                </Form.Control.Feedback>
              ) : null}
            </Form.Group>
            <Button type="submit" className="float-end mb-3">Submit</Button>

          </Form>
        </Col>
      </Row>
    </Container>
  </>
}