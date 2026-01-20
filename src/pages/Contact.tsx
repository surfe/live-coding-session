"use client";
import { useParams } from "react-router";
import { MOCK_CONTACTS } from "../constants";
import type { Contact } from "../types";

export const ContactPage = () => {
    const { contactId } = useParams();
    const contact = MOCK_CONTACTS.find((contact: Contact) => contact.id === contactId);

    if (!contact) {
        return <div>No contact found with this ID</div>;
    }

    return (
        <div
            key={contact.id}
            className="flex min-w-100 flex-col items-center justify-start rounded-xl border border-grey-200 p-5"
        >
            <div className="flex flex-col items-center">
                <div className="mt-3"></div>
                <p className="mt-2 text-xl">{`${contact.firstName} ${contact.lastName}`}</p>
                <p className="text-sm text-grey-500">{contact.title}</p>
            </div>
            <div className="mt-5 flex w-100 flex-col space-y-1">
                <div className="flex items-center space-x-1">
                    <span className="text-sm">Company:</span>
                    <span className="text-sm">{contact.company}</span>
                </div>
                <div className="flex items-center space-x-1 w-full">
                    <span className="text-sm">Email:</span>
                    <input
                        value={contact?.email}
                        placeholder="example@example.com"
                    />
                    <button className="text-blue-600 text-sm underline cursor-pointer ml-auto">Find email</button>
                </div>
                <div className="flex items-center space-x-1">
                    <span className="text-sm">Phone:</span>
                    <input
                        value={contact.phone}
                        placeholder="+34 748 928 192"
                    />
                    <button className="text-blue-600 text-sm underline cursor-pointer ml-auto">Find phone</button>
                </div>
            </div>
            <div className="mt-10">
                <button className="rounded-md bg-cyan-800 px-4 py-2 text-white">
                    Start enrichment
                </button>
            </div>
        </div>
    );
};
