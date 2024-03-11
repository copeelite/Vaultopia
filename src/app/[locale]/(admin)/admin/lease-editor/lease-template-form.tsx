"use client";

import React from 'react'
import { createLeaseDetailTemplate } from '@/actions/admin/create-lease-template'
import { FormSubmit } from '@/components/form/form-submit'
import { FormInput } from '@/components/form/form-input';
import { useAction } from '@/hooks/use-action';

import { useAtom } from 'jotai';
import { isAddNewTemplateOpenAtom } from '@/components/states/admin/isAddNewTemplateOpen';
import { mutate } from 'swr';


const LeaseTemplateForm = () => {
    const [isAddNewTemplateOpen, setNewTemplate] = useAtom(isAddNewTemplateOpenAtom);
    
    const { execute, fieldErrors } =  useAction(createLeaseDetailTemplate,
        {
            onSuccess: (data) => {
                console.log(data, 'SUCCESS!')
                setNewTemplate(false)
                mutate('leaseContractTemplate');

            },
            onError: (error) => {
                console.log(error, 'ERROR!')
            }

        })
    const onSubmit = (formData: FormData) => {
        const name = formData.get('name') as string
        const description = formData.get('description') as string
        //console.log(name, description)
        execute({ name, description})
        
    }
    return (
        <form action={onSubmit} className='space-y-4 pr-6'>
            <div>
                <FormInput
                    label='Name'
                    id='name'
                    errors={fieldErrors}
                />
                <FormInput
                    label='Description'
                    id='description'
                    errors={fieldErrors}
                />
            </div>
            <FormSubmit className='w-full'>
                Save Lease Template
            </FormSubmit>
        </form>
    )
}

export default LeaseTemplateForm