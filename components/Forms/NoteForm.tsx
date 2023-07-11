import React, { Fragment } from "react";
import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Dialog, Transition } from '@headlessui/react';

export function NoteForm({noteSubmitAPI} : {noteSubmitAPI: (arg1: string, arg2: string, arg3: string) => void}){

    let [isOpen, setIsOpen] = useState(false)
    let [title, setTitle] = useState("")
    let [author, setAuthor] = useState("")
    let [content, setContent] = useState("")

    function closeModal(){
        setIsOpen(false)
    }

    function openModal(){
        setIsOpen(true)
    }

    async function saveNote(){
        noteSubmitAPI(title, content, author)
        closeModal()
        setTitle("")
        setAuthor("")
        setContent("")
    }

    return(
        <>
            <div className="flex items-center justify-center w-[320px] h-[380px]">
                <div className="hover:scale-110 duration-700">
                    <button onClick={openModal}>
                        <AiOutlinePlusCircle size={120}/>
                    </button>
                </div>
            </div>
            <Transition appear show={isOpen} as={React.Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                            </Transition.Child>
                            <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child as={React.Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                    <Dialog.Panel className="max-w-md transform overflow-auto bg-white p-6 text-left align-middle shadow-xl transition-all w-[420px] min-h-full">
                                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                            <p>Create a Note for my Guestbook</p>
                                        </Dialog.Title>
                                            <div className="mt-2">
                                                <div className="bg-white p-4 text-sm text-gray-500">
                                                    <div className="grid gap-2 mb-6 grid-cols-1">
                                                        <div>
                                                            <label form="chart" className="block mb-2 text-sm font-medium text-black dark:text-gray-300">Title</label>
                                                            <input type="text" id="cardname" value={title} onInput={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                                                        </div>

                                                        <div>
                                                            <label form="chart" className="block mb-2 text-sm font-medium text-black dark:text-gray-300">Author</label>
                                                            <input type="text" id="cardname" value={author} onInput={(e: React.ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                                                        </div>

                                                        <div>
                                                            <label form="chart" className="block mb-2 text-sm font-medium text-black dark:text-gray-300">Content</label>
                                                            <textarea id="trackedPerson" value={content} onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)} maxLength={250} className="h-[105px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid gap-2 mb-6 grid-cols-2">
                                                <button onClick={saveNote} className="hover:shadow-form w-full rounded-md bg-[#2a0f0f] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                                    Speichern
                                                </button>
                                                <button onClick={closeModal} className="hover:shadow-form w-full rounded-md bg-[#2a0f0f] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                                    Abbrechen
                                                </button>
                                            </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                        </Dialog>
                    </Transition>
        </>
    )

}