"use client"
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { Calendar } from 'lucide-react';

import React from 'react'
import {
    CalendarIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    EllipsisHorizontalIcon,
    MapPinIcon,
} from '@heroicons/react/20/solid'
import { Check } from 'lucide-react';
import { X } from 'lucide-react';

import axios from 'axios'
import fileDownload from 'js-file-download'




const Notice = () => {


    return (
        <div>
            <div className="overflow-hidden shadow sm:rounded-lg">
                <div className="px-4 sm:px-6 pb-4">
                    <h3 className="text-xl leading-7 font-bold">Internal Notice - Rent Increase</h3>
                    <p className="mt-1 max-w-2xl text-lg leading-6">Confirmation Required</p>
                </div>
                <div className="border-t">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-12">
                            <div className="text-sm font-medium ">
                                <div
                                    className="flex h-10 w-10 items-center justify-center bg-sky-400 rounded-lg"
                                >
                                    <Calendar className="h-5 w-5 text-white" aria-hidden="true" />
                                </div>
                            </div>
                            <dd className="mt-1 text-sm leading-6 sm:col-span-11 sm:mt-0">
                                <div>
                                    <h2>Basic Information</h2>
                                    <h4>Inter system indication:</h4>
                                    <ul>
                                        <li>- Lease agreement commenced since January 1, 2023</li>
                                        <li>- Fixed term for a year</li>
                                        <li>- Current rent: $2,600/month</li>
                                        <li>- The landlord can increase the rent every 12 (twelve) months by providing 90 day notice before the effective day</li>
                                    </ul>
                                </div>
                                <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
                                    <div className="flex items-start space-x-3">
                                        <dt className="mt-0.5">
                                            <span className="sr-only">Date</span>
                                            <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </dt>
                                        <dd>
                                            Monday, 10:24 AM August 10, 2023
                                        </dd>
                                    </div>
                                    <div className="mt-2 flex items-start space-x-3 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                                        <dt className="mt-0.5">
                                            <span className="sr-only">Location</span>
                                            <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </dt>
                                        <dd>
                                            <p>Source Link</p>
                                            <p>Ontario Residential Rent Increase Guideline</p>
                                        </dd>
                                    </div>
                                </dl>
                            </dd>
                        </div>









                        {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"> */}
                        <div className="px-4 py-6 sm:grid sm:grid-cols-12">

                            <dt className="text-sm font-medium ">
                                <div
                                    className="flex h-10 w-10 items-center justify-center bg-pink-400 rounded-lg"
                                >
                                    <Calendar className="h-5 w-5 text-white" aria-hidden="true" />
                                </div>
                            </dt>
                            <dd className="mt-1 text-sm leading-6 sm:col-span-11 sm:mt-0">
                                <div>
                                    <h2>Authorization Sought</h2>
                                    <h4>Upon your confirmation, we will</h4>
                                    <ul>
                                        <li>- Issue a N1 notice form and send to the tenant</li>
                                        <li>- New rent: $2,665 effective on January 1, 2024</li>
                                    </ul>
                                </div>
                                <dl className="mt-2 flex flex-row text-gray-500 items-center">
                                    <div className="flex items-start space-x-3">
                                        <div className="h-5 w-5 text-green-400" aria-hidden="true">
                                            Agree
                                        </div>
                                        <dt className="mt-0.5">
                                            <span className="sr-only">Date</span>
                                            {/* <X className="h-5 w-5 text-red-500" aria-hidden="true"></X>  */}

                                        </dt>
                                    </div>
                                    <div className="flex items-start space-x-3 ml-3.5 border-l border-gray-400 border-opacity-50 pl-3.5">

                                        <div className="h-5 w-5 text-red-500" aria-hidden="true">Disagree</div>

                                        <dt className="mt-0.5">
                                            <span className="sr-only">Location</span>
                                            {/* <Check className="h-5 w-5 text-green-400" aria-hidden="true" /> */}

                                        </dt>
                                    </div>
                                </dl>
                            </dd>
                        </div>

                        <div className="px-4 py-6 sm:grid sm:grid-cols-7">
                            <dt className="text-sm font-medium leading-6">Attachments</dt>
                            <dd className="mt-2 text-sm sm:col-span-5 sm:mt-0 xl:w-6/12">
                                <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                        <div className="flex w-0 flex-1 items-center">
                                            <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                <span className="truncate font-medium">N1-rent increase notice form.pdf</span>
                                                <span className="flex-shrink-0 text-gray-400">746kb</span>
                                            </div>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a
                                                href='https://drive.google.com/uc?export=download&id=1rtZO506YbvAgFbA1KT3MJU9ujsxiSGTi' download
                                                className="font-medium text-indigo-400 hover:text-indigo-500">
                                                Download
                                            </a>
                                        </div>
                                    </li>

                                </ul>
                            </dd>
                        </div>

                        <div className="px-4 py-6 sm:grid sm:grid-cols-3">
                            <h2>Other comments/feedbacks?</h2>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Notice