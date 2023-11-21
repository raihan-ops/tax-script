'use client'
import React, {useState} from 'react';
import {Layout, Menu} from "antd";
import {items} from "@/routes";
import styles from '../../app/page.module.css'
import Link from "next/link";
import {useRouter} from "next/navigation";
const { Header, Content, Footer } = Layout;
const Navbar = () => {
    const [current, setCurrent] = useState('');
    const router= useRouter()
    const onClick = (e) => {
        setCurrent(e.key);
        router.push(`/${e.key}`)
    };

    const handleClear=()=>{
        setCurrent("");
    }

    return (
        <Layout className="layout">
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <Link href="/">
                    <h1 onClick={handleClear} className={styles.Logo}>Tax Script</h1>
                </Link>
                <Menu
                    onClick={onClick}
                    theme="dark"
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={items}
                />
            </Header>
        </Layout>
    );
};

export default Navbar;