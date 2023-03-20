import * as Yup from "yup";

export default(props: object) => {
    return Yup.object().shape({
        client_id: Yup.string()
          .required(
            'Client is required'
          ),
        subscribed: Yup.array()
          .required(
            'Category is required'
          ).min(1),
        message: Yup.string()
          .required(
            'Message is required'
          ),
    });
}