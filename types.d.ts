interface FormstackSubmission {
  id: string;
  timestamp: string;
  user_agent: string;
  remote_addr: string;
  payment_status: string;
  form: string;
  latitude: string;
  longitude: string;
  data: Field[];
  pretty_field_id: string;
}

interface Field {
  field: string;
  value: string;
  internal_label?: string;
}
