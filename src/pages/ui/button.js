import React from 'react';
import {Card,Button} from 'antd'
import "./ui.less"
export default class Buttons extends React.Component{
    render() {
        return(
            <div>
                <Card title={"基础按钮"}>
                    <Button type={"primary"}>花裤熊二</Button>
                    <Button >花裤熊二</Button>
                    <Button type={"dashed"}>花裤熊二</Button>
                    <Button type={"danger"}>花裤熊二</Button>

                </Card>
                <Card title={"图形按钮"}>
                    <Button icon={"plus"}>创建</Button>
                    <Button icon={"edit"}>编辑</Button>
                    <Button icon={"delete"}>删除</Button>
                    <Button shape={"circle"} icon={"search"}></Button>
                    <Button type={"primary"} icon={"search"}>搜索</Button>
                    <Button type={"primary"} icon={"download"}>下载</Button>

                </Card>
            </div>
        )
    }
}
