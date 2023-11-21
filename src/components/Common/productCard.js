'use client'
import React from 'react';
import {Card} from 'antd';
import Image from "next/image";
import Link from "next/link";
import styles from '../../app/page.module.css'

const {Meta} = Card;

const ProductCard = (props) => {
    return (
        <Link
            href={`/product/${props?.data.id}`}
            className={styles.removeUnderline}
        >
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<Image
                    alt="example"
                    src={props?.data?.image}
                    width={200}
                    height={300}
                />
                }
            >

                <Meta title={props?.data?.name} description="www.instagram.com"/>
            </Card>
        </Link>
    );
};

export default ProductCard;