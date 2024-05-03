import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {FaX} from "react-icons/fa6";
import {Box} from "@mui/material";

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 100,
            width: 100,
            marginTop: 8,
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

    const handleChange = (event: SelectChangeEvent<typeof itemsState>) => {
        const {
            target: { value },
        } = event;
        setItemsState(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 200 }} variant="standard">
                <Select
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
                    }}
                    multiple
                    value={itemsState}
                    onChange={handleChange}
                    MenuProps={MenuProps}
                    renderValue={(items)=>(
                        <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                            {items && items.map((item)=>(
                                <div style={{display: "inline"}}>
                                    <text style={{background: "#e6e6e6", padding: "4px"}}>
                                        {item}
                                        <FaX
                                            onClick={()=>{

                                            }}
                                            style={{fontSize: "10px", padding: "0 0 0 10px",}}/>

                                    </text>
                                </div>
                            ))}
                        </Box>
                    )}
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
