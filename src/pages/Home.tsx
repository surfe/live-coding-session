import { NavLink, Outlet } from "react-router";
import { MOCK_CONTACTS } from "../constants";

export const Home = () => {
    const contacts = MOCK_CONTACTS;

    return (
        <div className="flex min-w-100 flex-col items-center justify-center space-y-5 p-5">
            <h1 className="font-heading text-3xl">Live Coding Assignment</h1>
            <div className="flex space-x-5 border-grey-100">
                {contacts?.map((contact) => {
                    return (
                        <NavLink
                            className="space-x-2 text-blue-650"
                            key={contact.id}
                            to={`/${contact.id}`}
                        >
                            <span className="space-x-1">{`${contact.firstName} ${contact.lastName}`}</span>
                        </NavLink>
                    );
                })}
            </div>
            <main>{<Outlet />}</main>
        </div>
    );
};
