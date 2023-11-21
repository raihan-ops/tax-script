import {Flex, Spin} from "antd";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div >
            <Spin size="large" />
        </div>
    )
}