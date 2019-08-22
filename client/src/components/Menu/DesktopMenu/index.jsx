import React from 'react';
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from 'react-bootstrap/Dropdown'


export const DesktopMenu = () =>
    <div className="desktop-menu-container">
        <div className="container">
            <ButtonToolbar className="toolbar">
                {['right'].map(direction => (
                    <DropdownButton
                        drop={direction}
                        variant="primary"
                        title={`NBA`}
                        id={`dropdown-button-drop-${direction}`}
                        key={direction}
                        className="drop-btn"
                    >
                        <div className="menu-second-layer">
                            <DropdownButton
                                drop={direction}
                                variant="secondary"
                                title={` AFC East `}
                                id={`dropdown-button-drop-${direction}`}
                                key={direction}
                                className="second-layer-btn"
                            >
                            </DropdownButton>

                            <DropdownButton
                                drop={direction}
                                variant="secondary"
                                title={` AFC North `}
                                id={`dropdown-button-drop-${direction}`}
                                key={direction}
                                className="second-layer-btn"
                            >
                            </DropdownButton>

                            <DropdownButton
                                drop={direction}
                                variant="secondary"
                                title={` AFC South `}
                                id={`dropdown-button-drop-${direction}`}
                                key={direction}
                                className="second-layer-btn"
                            >
                                <div className="menu-third-layer">
                                    <Dropdown.Item eventKey="1" className="third-layer-link">Houston</Dropdown.Item>
                                    <Dropdown.Item eventKey="2"
                                                   className="third-layer-link">Indianapolis</Dropdown.Item>
                                    <Dropdown.Item eventKey="3"
                                                   className="third-layer-link">Jacksonville</Dropdown.Item>
                                    <Dropdown.Item eventKey="4" className="third-layer-link">Tennessee</Dropdown.Item>
                                </div>
                            </DropdownButton>

                            <DropdownButton
                                drop={direction}
                                variant="secondary"
                                title={` AFC West `}
                                id={`dropdown-button-drop-${direction}`}
                                key={direction}
                                className="second-layer-btn"
                            >
                            </DropdownButton>

                            <DropdownButton
                                drop={direction}
                                variant="secondary"
                                title={` NFC East `}
                                id={`dropdown-button-drop-${direction}`}
                                key={direction}
                                className="second-layer-btn"
                            >
                            </DropdownButton>

                            <DropdownButton
                                drop={direction}
                                variant="secondary"
                                title={` NFC North `}
                                id={`dropdown-button-drop-${direction}`}
                                key={direction}
                                className="second-layer-btn"
                            >
                            </DropdownButton>

                            <DropdownButton
                                drop={direction}
                                variant="secondary"
                                title={` NFC South `}
                                id={`dropdown-button-drop-${direction}`}
                                key={direction}
                                className="second-layer-btn"
                            >
                            </DropdownButton>

                            <DropdownButton
                                drop={direction}
                                variant="secondary"
                                title={` NFC West `}
                                id={`dropdown-button-drop-${direction}`}
                                key={direction}
                                className="second-layer-btn"
                            >
                            </DropdownButton>
                        </div>
                    </DropdownButton>
                ))}
            </ButtonToolbar>

            <ButtonToolbar className="toolbar">
                {['right'].map(direction => (
                    <DropdownButton
                        drop={direction}
                        variant="primary"
                        title={`NFL`}
                        id={`dropdown-button-drop-NFL`}
                        key={direction}
                        className="drop-btn"
                    >
                    </DropdownButton>
                ))}
            </ButtonToolbar>

            <ButtonToolbar className="toolbar">
                {['right'].map(direction => (
                    <DropdownButton
                        drop={direction}
                        variant="primary"
                        title={`MLB`}
                        id={`dropdown-button-drop-MLB`}
                        key={direction}
                        className="drop-btn"
                    >
                    </DropdownButton>
                ))}
            </ButtonToolbar>

            <ButtonToolbar className="toolbar">
                {['right'].map(direction => (
                    <DropdownButton
                        drop={direction}
                        variant="primary"
                        title={`NHL`}
                        id={`dropdown-button-drop-NHL`}
                        key={direction}
                        className="drop-btn"
                    >
                    </DropdownButton>
                ))}
            </ButtonToolbar>

            <ButtonToolbar className="toolbar">
                {['right'].map(direction => (
                    <DropdownButton
                        drop={direction}
                        variant="primary"
                        title={`CBB`}
                        id={`dropdown-button-drop-CBB`}
                        key={direction}
                        className="drop-btn"
                    >
                    </DropdownButton>
                ))}
            </ButtonToolbar>

            <ButtonToolbar className="toolbar">
                {['right'].map(direction => (
                    <DropdownButton
                        drop={direction}
                        variant="primary"
                        title={`CFB`}
                        id={`dropdown-button-drop-CFB`}
                        key={direction}
                        className="drop-btn"
                    >
                    </DropdownButton>
                ))}
            </ButtonToolbar>

            <ButtonToolbar className="toolbar">
                {['right'].map(direction => (
                    <DropdownButton
                        drop={direction}
                        variant="primary"
                        title={`NASCAR`}
                        id={`dropdown-button-drop-NASCAR`}
                        key={direction}
                        className="drop-btn"
                    >
                    </DropdownButton>
                ))}
            </ButtonToolbar>

            <ButtonToolbar className="toolbar">
                {['right'].map(direction => (
                    <DropdownButton
                        drop={direction}
                        variant="primary"
                        title={`GOLF`}
                        id={`dropdown-button-drop-GOLF`}
                        key={direction}
                        className="drop-btn"
                    >
                    </DropdownButton>
                ))}
            </ButtonToolbar>

            <ButtonToolbar className="toolbar">
                {['right'].map(direction => (
                    <DropdownButton
                        drop={direction}
                        variant="primary"
                        title={`SOCCER`}
                        id={`dropdown-button-drop-SOCCER`}
                        key={direction}
                        className="drop-btn"
                    >
                    </DropdownButton>
                ))}
            </ButtonToolbar>

            <ButtonToolbar className="toolbar">
                {['right'].map(direction => (
                    <DropdownButton
                        drop={direction}
                        variant="primary"
                        title={`MORE`}
                        id={`dropdown-button-drop-MORE`}
                        key={direction}
                        className="drop-btn"
                    >
                    </DropdownButton>
                ))}
            </ButtonToolbar>


        </div>
    </div>;
