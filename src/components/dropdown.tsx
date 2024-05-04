import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {FaX} from "react-icons/fa6";
import {IconButton, InputLabel, inputLabelClasses, Stack} from "@mui/material";
import '../App.css'
import {ChevronDown, Tally1, X} from "lucide-react";
import {useAppDispatch} from "../store/store.ts";
import {addFilter, removeFilter} from "../store/slice/filterSlices.ts";
import {Filter} from "../types.ts";

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 300,
            width: "inherit",
            marginTop: 4,
            borderStyle: "solid",
            borderColor: "#ced4da",
            borderWidth: "1px",
            boxShadow: "none"
        },
    },
}
interface DropdownProps<T> {
    items: T[]
    title: string
}

export default function MultiSelectDropdown<T extends Filter>({items, title}: DropdownProps<T>) {
    const theme = useTheme();
    const dispatch = useAppDispatch()
    const [itemsState, setItemsState] = React.useState<string[]>([]);
    const [menuOpen, setMenuOpen] = React.useState(false)

    const handleAddItems = (item: T[]) => {
        dispatch(addFilter(item))
        setItemsState(item)
    }

    const handleRemoveItem = (item: T) => {
        dispatch(removeFilter(item))
        setItemsState((prev) => prev.filter((value) => value != item))
    }

    return (
        <div>
            <FormControl sx={{
                m: 1,
                minWidth: 200,
                width: "fit-content",
                '&:hover': {
                    color: "#ffffff"
                }
            }} variant="standard">
                <InputLabel sx={{
                    zIndex: 10,
                    padding: "8px 0 0 12px",
                    fontSize: "12px",
                    pointerEvents: "none",
                    [`&.${inputLabelClasses.shrink}`]: {
                        color: '#000000',
                        marginTop: "-8px",
                        fontSize: '20px',
                        fontWeight: '500'
                    }
                }}>{title}</InputLabel>
                <Select
                    variant={"outlined"}
                    disableUnderline
                    sx={{
                        '& .MuiInputBase-input': {
                            position: 'relative',
                            borderRadius: "4px",
                            backgroundColor: theme.palette.background.paper,
                            fontSize: 16,
                            padding: '8px 26px 8px 12px',
                            transition: theme.transitions.create(['border-color', 'box-shadow']),
                        },
                        'label + &': {
                            marginTop: theme.spacing(2),
                        }
                    }}
                    multiple
                    value={itemsState}
                    onChange={(e) => {
                        handleAddItems(e.target.value as T[])
                    }}
                    MenuProps={MenuProps}
                    renderValue={(items) => (
                        <Stack
                            direction={"row"}
                            flexWrap={"wrap"}
                            gap={1}>
                            {items && items.map((item, idx) => (
                                <div key={idx}
                                     style={{
                                         height: "22px",
                                         display: "flex",
                                         borderRadius: "4px",
                                         padding: " 0 0 0 10px",
                                         background: "#e6e6e6"
                                     }}>
                                    <div style={{
                                        fontWeight: 300,
                                        fontSize: "13.5px"
                                    }}>
                                        {item}
                                    </div>
                                    <IconButton
                                        onMouseDown={(e) => {
                                            handleRemoveItem(item as T)
                                            e.stopPropagation()
                                        }}
                                        sx={{
                                            zIndex: 10,
                                            height: "100%",
                                            borderRadius: "4px",
                                            margin: "0  0 0 4px ",
                                            '&:hover': {
                                                background: '#ffbdad',
                                            }
                                        }}>
                                        <FaX
                                            style={{
                                                color: "black",
                                                fontSize: "9px",
                                                padding: "0 0 0 2px"
                                            }}/>
                                    </IconButton>
                                </div>
                            ))}
                        </Stack>
                    )}
                    open={menuOpen}
                    onOpen={() => setMenuOpen(true)}
                    onClose={() => setMenuOpen(false)}
                    IconComponent={() => (
                        <div style={{
                            padding: "0 4px",
                            display: "flex",
                            alignItems: "center"
                        }}>
                            {itemsState.length > 0 && <div className={"select-icon"}>
                                <X style={{
                                    width: "16px"
                                }} onMouseDown={
                                    () => handleAddItems([])
                                }/>
                            </div>}
                            <div className={"select-divider"}>
                                <Tally1 style={{
                                    width: "28px"
                                }}/>
                            </div>
                            <div className={"select-icon"}>
                                <ChevronDown style={{
                                    width: "20px"
                                }} onMouseDown={
                                    () => setMenuOpen(true)
                                }
                                />
                            </div>
                        </div>

                    )}
                >
                    {itemsState.length == items.length ? <MenuItem sx={{
                        color: "#666666",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        pointerEvents: "none"
                    }}>
                        No options
                    </MenuItem> : (items as string[]).filter(selected => !itemsState.includes(selected as string)).map((item) => (
                        <MenuItem
                            sx={{
                                "&:hover": {
                                    background: '#deebff',
                                },
                                "&.Mui-selected": {
                                    background: "#ffffff"
                                },
                                fontSize: "14px",
                                display: "flex"
                            }}
                            key={item}
                            value={item}
                        >
                            {item}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
