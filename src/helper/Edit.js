import { Button, Form, Input, Space, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateData } from "./dataReducer";

const EditForm = ({ details, onEditClose, id }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = (updatedValues) => {
    console.log(updatedValues);
    dispatch(
      updateData({
        id: id,
        date: updatedValues.date,
        amount: updatedValues.amount,
        payee: updatedValues.payee,
        payer: updatedValues.payer,
        invoice: updatedValues.invoice_no,
      })
    );
    onEditClose();
  };

  const SubmitButton = ({ form }) => {
    const [submittable, setSubmittable] = useState(false);

    const values = Form.useWatch([], form);

    useEffect(() => {
      form.validateFields({ validateOnly: true }).then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        }
      );
    }, [values]);

    return (
      <Button type="primary" htmlType="submit" disabled={!submittable}>
        Submit
      </Button>
    );
  };

  useEffect(() => {
    if (details) {
      Object.keys(details).map((key) => {
        form.setFieldValue(key, details[key]);
      });
    }
  }, [details]);
  return (
    <div>
      <Form
        form={form}
        name="validateOnly"
        layout="vertical"
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item name="date" label="Transaction Date">
          <Input />
        </Form.Item>

        <Form.Item name="invoice_no" label="Invoice No.">
          <Input />
        </Form.Item>
        <Form.Item name="payer" label="Payer">
          <Input />
        </Form.Item>
        <Form.Item name="payee" label="Payee">
          <Input />
        </Form.Item>
        <Form.Item name="amount" label="Amount in Rupees">
          <Input />
        </Form.Item>

        <Form.Item>
          <Space>
            <SubmitButton form={form} />
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditForm;
