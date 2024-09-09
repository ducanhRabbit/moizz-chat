import React from 'react'
import { FormProvider as Form } from 'react-hook-form'
function FormProvider({submit,method,children}) {
  return (
    <>
    <Form {...method}>
        <form onSubmit={method.handleSubmit(submit)}>
            {children}
        </form>
    </Form>
    </>
  )
}

export default FormProvider