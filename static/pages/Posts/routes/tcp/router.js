import asyncComponent from "../../../../components/AsyncComponent";

let route = [
    {
        path: "/posts/tcp",
        component: asyncComponent(() => import("./components/Index"))
    }
];
export default route;
