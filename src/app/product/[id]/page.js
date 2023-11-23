import React from 'react';
import {Col, Row, Space, Tag} from "antd";
import {promises as fs} from 'fs';
import Image from "next/image";

// export async function getLocalData() {
//     const file = await fs.readFile(process.cwd() + '/src/app/db.json', 'utf8');
//     return JSON.parse(file)
// }

const Page = async ({params}) => {
    // const data = await getLocalData()
    // const result = data?.watches?.find((value) => value.id === parseInt(params.id))


    return (<div>
        <Row gutter={16}>
            <Col className="gutter-row" span={12}>
                <p>Heloo</p>
                {/*<Image src={result?.image}*/}
                {/*       width={0}*/}
                {/*       height={0}*/}
                {/*       sizes="100vw"*/}
                {/*       style={{ width: '100%', height: 'auto' }}*/}
                {/* alt={"abc"}/>*/}
            </Col>
            <Col className="gutter-row" span={12}>
                {/*<h1 >{result?.name}</h1>*/}
                {/*<Space size={[0, 8]} wrap>*/}
                {/*    {result?.features?.map((data,index)=>*/}
                {/*        <Tag color="default" key={index}>{data}</Tag>*/}
                {/*    )}*/}
                {/*</Space>*/}
            </Col>

        </Row>
    </div>);
};

export default Page;