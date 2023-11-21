import {Flex, Spin} from "antd";
import styles from "../../page.module.css"

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div>
            <Spin size="large" />
        </div>
    )
}