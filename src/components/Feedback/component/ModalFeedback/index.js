import React from 'react';
import {Button ,Form, Modal,Input, Icon } from 'antd';
const FormItem = Form.Item;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
    },
};
class ModalFeedback extends React.Component {

    constructor(props){
        super(props);

    }
    handleOk = (e) => {

    }

    handleCancel = (e) => {
        this.props.showCodeOff()
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Modal
                title="Обратный звонок"
                visible={true}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <Form  >
                        <FormItem
                            {...formItemLayout}
                            label="Имя"
                            hasFeedback
                        >
                            {getFieldDecorator('name', {
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="Ваш телефон"
                            hasFeedback
                        >
                            {getFieldDecorator('phone', {
                            })(
                                <Input />
                            )}
                        </FormItem>
                    </Form>
            </Modal>
        );
    }
}

const WrappedModalFeedbackForm = Form.create()(ModalFeedback);
export default WrappedModalFeedbackForm;