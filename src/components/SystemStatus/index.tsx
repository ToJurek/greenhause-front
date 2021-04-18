import styled from "styled-components"
import {ListGroup, Modal} from "react-bootstrap";
import {useTypedSelector} from "../../domain/store";
import {Typography} from "@material-ui/core";
import React from "react";

interface IProps {
    className?: string
    isVisible: boolean;
    setVisible: (visible: boolean) => any
}

const variants = ["success",
    "warning", "danger"
]

const SystemStatus = ({className, isVisible, setVisible}: IProps) => {
    const systemStatuses = useTypedSelector(state => state.systemStatus)
    return (<Modal show={isVisible} onHide={() => setVisible(false)} className={className}>
        <Typography variant="h4">Statues</Typography>
        <ListGroup>
            <ListGroup.Item variant={variants[systemStatuses.lambda.status]}>
                <div className={"list-row"}>
                    <div>AWS Lambda</div>
                    <div>{systemStatuses.lambda.message}</div>
                </div>
            </ListGroup.Item>
            <ListGroup.Item variant={variants[systemStatuses.iot.status]}>
                <div className={"list-row"}>
                    <div>AWS IoTCore</div>
                    <div>{systemStatuses.iot.message}</div>
                </div>
            </ListGroup.Item>
            <ListGroup.Item variant={variants[systemStatuses.server.status]}>
                <div className={"list-row"}>
                    <div>Server</div>
                    <div>{systemStatuses.server.message}</div>
                </div>
            </ListGroup.Item>
            <ListGroup.Item variant={variants[systemStatuses.db.status]}>
                <div className={"list-row"}>
                    <div>MySQL</div>
                    <div>{systemStatuses.db.message}</div>
                </div>
            </ListGroup.Item>
            <ListGroup.Item variant={variants[systemStatuses.esp.status]}>
                <div className={"list-row"}>
                    <div>ESP8266</div>
                    <div>{systemStatuses.esp.message}</div>
                </div>
            </ListGroup.Item>

        </ListGroup>
    </Modal>)
}

const SystemStatusStyled = styled(SystemStatus)`
.list-row {
  display: grid;

  grid-template-columns: 3fr 1fr
}
`

export default SystemStatusStyled