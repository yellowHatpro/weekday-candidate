import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {FaX} from "react-icons/fa6";
import {Box, Button, InputLabel, inputLabelClasses} from "@mui/material";

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 100,
            width: 100,
            marginTop: 4,
            borderStyle: "solid",
            borderColor: "#ced4da",
            borderWidth: "1px",
            boxShadow: "none"
        },
    },
}

type DropdownProps = {
    items: Array<string>,
    title: string
}

export default function MultiSelectDropdown({items, title}: DropdownProps) {
    const theme = useTheme();
    const [itemsState, setItemsState] = React.useState<string[]>([]);
    const [menuOpen, setMenuOpen] = React.useState(false)

    const handleChange = (event: SelectChangeEvent<typeof itemsState>) => {
        const {
            target: { value },
        } = event;
        setItemsState(
            value as string[]
        );
        setMenuOpen(false)
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth:200, width: "fit-content"  }} variant="standard">
                <InputLabel sx={{
                    zIndex: 10,
                    [`&.${inputLabelClasses.shrink}`]: {
                        color: '#000000',
                        marginTop: "-2px",
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
                            border: '1px solid #ced4da',
                            fontSize: 16,
                            padding: '10px 26px 10px 12px',
                            transition: theme.transitions.create(['border-color', 'box-shadow']),
                        },
                        'label + &': {
                            marginTop: theme.spacing(2),
                        }
                    }}
                    multiple
                    value={itemsState}
                    onChange={handleChange}
                    MenuProps={MenuProps}
                    renderValue={(items)=>(
                        <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                            {items && items.map((item, idx)=>(
                                <div key={idx} style={{display: "inline"}}>
                                    <p style={{
                                        borderRadius: "4px",
                                        background: "#e6e6e6",
                                        padding: "4px",
                                        display: "inline"}}>
                                        {item}
                                        <Button
                                            sx={{zIndex: 0,
                                                minWidth: "5px",
                                                height: "100%",
                                                '&:hover': {
                                                    background: '#d4152c',
                                                }}}
                                            onClick={()=>{
                                            alert("ff")
                                        }}>
                                            <FaX
                                                style={{fontSize: "10px", padding: "0 0 0 10px"}}/>
                                        </Button>

                                    </p>
                                </div>
                            ))}
                        </Box>
                    )}
                    open = {menuOpen}
                    onOpen={()=>setMenuOpen(true)}
                    onClose={()=>setMenuOpen(false)}
                >
                    {items.map((item) => (
                        <MenuItem
                            sx={{
                                "&:hover": {
                                    background: '#deebff',
                                }
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
