import React from "react";

export const Profile = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
