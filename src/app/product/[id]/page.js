'use client'
import React, {useState} from 'react';
import {Col, Row, Space, Tag} from "antd";
import Image from "next/image";



const Page =  ({params}) => {
    const [data,setData]=useState({
        "watches": [
            {
                "id": 1,
                "name": "Haylou GST",
                "image": "https://live.staticflickr.com/65535/52953899202_478089ea5f_h.jpg",
                "price": 31.99,
                "features": [
                    "1.69'' HD display",
                    "Support 12 workout modes",
                    "Support all-day heart rate and blood oxygen monitoring",
                    "Support intelligent sleep monitoring",
                    "IP68 dustproof and waterproof",
                    "20 days of battery life"
                ],
                "status": true,
                "rating": 5
            },
            {
                "id": 2,
                "name": "Haylou GS",
                "image": "https://live.staticflickr.com/65535/52954632614_2db2bed3a7_h.jpg",
                "price": 32.38,
                "features": [
                    "38g compact body, more comfortable to wear",
                    "Support 12 workout modes",
                    "Support SpO₂ tracking and heart rate monitoring",
                    "Support smart sleep monitoring",
                    "IP68 dustproof and waterproof",
                    "20-day battery life"
                ],
                "status": false,
                "rating": 3
            },
            {
                "id": 3,
                "name": "Haylou Solar Plus RT3",
                "image": "https://live.staticflickr.com/65535/52953899127_38e776f3f7_h.jpg",
                "price": 48.79,
                "features": [
                    "Bluetooth 5.2, worry-free communication made easy",
                    "Precise and clear experience with 1.43\" Amoled display",
                    "5d looking level-up, exquisite metal bezel",
                    "Always-on display, conf_ident time control",
                    "Versatile watch faces, support customize watch face"
                ],
                "status": true,
                "rating": 5
            },
            {
                "id": 4,
                "name": "Haylou RT2",
                "image": "https://live.staticflickr.com/65535/52954494936_efd69e2df9_h.jpg",
                "price": 38.99,
                "features": [
                    "360*360 high resolution display",
                    "Support 12 workout modes",
                    "Support all-day heart rate and blood oxygen monitoring",
                    "Support intelligent sleep monitoring",
                    "20 days of battery life"
                ],
                "status": true,
                "rating": 2
            },
            {
                "id": 5,
                "name": "Haylou RS4 Plus",
                "image": "https://live.staticflickr.com/65535/52953899137_072c5c4ffc_h.jpg",
                "price": 54.84,
                "features": [
                    "1.78'' AMOLED HD display",
                    "60HZ refresh rate, smooth and delicate picture quality",
                    "Support 105 workout modes",
                    "Support multi-UI main menu mode",
                    "Support all-day heart rate and blood oxygen monitoring",
                    "Support Alipay offline payment"
                ],
                "status": false,
                "rating": 4
            },
            {
                "id": 6,
                "name": "Haylou RS3",
                "image": "https://live.staticflickr.com/65535/52953899132_fead48e579_h.jpg",
                "price": 63.07,
                "features": [
                    "1.2'' AMOLED HD display",
                    "Support 14 workout modes",
                    "Support all-day heart rate and blood oxygen monitoring",
                    "SONY GPS, accurate positioning of movement trajectory",
                    "5ATM waterproof",
                    "21 days of battery life"
                ],
                "status": true,
                "rating": 5
            }
        ]
    })
    const result = data?.watches?.find((value) => value.id === parseInt(params.id))


    return (<div>
        <Row gutter={16}>
            <Col className="gutter-row" span={12}>

                <Image src={result?.image}
                       width={0}
                       height={0}
                       sizes="100vw"
                       style={{ width: '100%', height: 'auto' }}
                 alt={"abc"}/>
            </Col>
            <Col className="gutter-row" span={12}>
                <h1 >{result?.name}</h1>
                <Space size={[0, 8]} wrap>
                    {result?.features?.map((data,index)=>
                        <Tag color="default" key={index}>{data}</Tag>
                    )}
                </Space>
            </Col>

        </Row>
    </div>);
};

export default Page;