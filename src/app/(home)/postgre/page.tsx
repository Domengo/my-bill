/** @format */

import { sql } from "@vercel/postgres";
import React from "react";

export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    role: string;
};

export default async function Cart({
    params,
}: {
    params: { user: string };
}): Promise<JSX.Element> {
    const email = "dominicsengo@gmail.com";
    const { rows } = await sql<User>`SELECT * FROM users WHERE email=${email}`;

    return (
        <div className="m-4 p-4 bg-cyan-300 rounded-3">
            <div className="column-2 gap-8" >
                <div>
                    {rows.map((row) => (
                        <div key={row.id}>
                            <h2>{row.name}</h2>
                            <p className="text-[#fe5454]">{row.email}</p>
                            <p>{row.role}</p>
                            <p>{row.password}</p>
                        </div>
                    ))}
                </div>
                <div>
                    hello se
                </div>
            </div>

        </div>
    );
}
