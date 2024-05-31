import { ReactNode } from "react";import ListGroup from "./ListGroup";interface Props {    children?: ReactNode;    onClose: () => void;}const cities = [    "Budapest",    "Chicago",    "Wroclaw",    "Helsinki",    "Frankfurt"];const back = (item: string) => {    return item;}const Alert = ({children, onClose}: Props) => {    return (        <div className="alert alert-primary alert-dismissible">            {children}            <ListGroup cities={cities} heading={"Cities"} onSelectItem={back}></ListGroup>            <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>        </div>    );}export default Alert;