import FormControl from "@mui/material/FormControl";
import {InputBase, InputLabel, inputLabelClasses, styled} from "@mui/material";

type InputFieldProps = {
    title: string
}

export default function InputField({title}: InputFieldProps) {

    const CustomInput = styled(InputBase)(({theme}) => ({
        'label + &': {
            marginTop: theme.spacing(2),
        },
        '& .MuiInputBase-input': {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: theme.palette.background.paper,
            border: '1px solid #ced4da',
            padding: "8px 10px",
            fontSize: 16,
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            // Use the system font instead of the default Roboto font.
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            '&:focus': {
                borderRadius: 4,
                borderColor: '#80bdff',
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
            },
        },
    }));

    return (
        <>
            <FormControl sx={{
                m: 1,
                minWidth: 200,
                width: "fit-content",
                padding: "0 0 0 0",
                '&:hover': {
                    color: "#ffffff"
                }
            }} variant="standard">
                <InputLabel
                    sx={{
                    zIndex: 10,
                    cursor: "value",
                    padding: "6px 0 0 12px",
                    fontSize: "12px",
                    pointerEvents: "none",
                    [`&.${inputLabelClasses.shrink}`]: {
                        color: '#000000',
                        marginTop: "-8px",
                        fontSize: '20px',
                        fontWeight: '500',
                    }
                }}>
                    {title}
                </InputLabel>
                <CustomInput/>
            </FormControl>
        </>
    )
}
