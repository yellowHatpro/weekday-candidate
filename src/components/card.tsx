import {Job} from "../types.ts";
import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import "../App.css"

type JobCardProps = {
    job: Job
}

export default function JobCard({job}: JobCardProps){
    return (
        <Card sx={{
            maxWidth: 350,
            boxShadow: "0px 1px 3px 2px #e4e4e4",
            borderRadius: "20px",
            margin:2,
            "&:hover": {
                transform: "translate(0, -6px)",
                transition: "0.6s"
            }
        }}>
            <CardContent>
                <div style={{
                    display: "flex",
                }}>
                    <Box
                        sx={{
                            height: 50,
                            width: 50,
                            padding: "0 12px 0 0"
                        }}
                        component="img"
                        src={job.logoUrl || ""}
                        alt={job.companyName || "Logo"}/>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start"
                    }}>
                        <Typography sx={{
                            fontSize: "14px",
                            color: "#8b8b8b",
                            fontWeight: "600"
                        }}>
                            {job.companyName}
                        </Typography>
                        <Typography sx={{
                            fontSize: "14px",
                            color: "#000000",
                            fontWeight: "300"
                        }}>
                            {job.jobRole}
                        </Typography>
                        <Typography sx={{
                            fontSize: "13px",
                            color: "#000000",
                            fontWeight: "400"
                        }}>
                            {job.location}
                        </Typography>
                    </div>
                </div>
                <div>
                    {(job.minJdSalary || job.maxJdSalary) && <Typography sx={{
                        width: "100%",
                        display: "flex",
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#4d596a"
                    }}>
                        Estimated Salary: {job.minJdSalary} {job.minJdSalary && "-"} {job.maxJdSalary} LPA ✅
                    </Typography>}
                </div>
                <div>
                    <Typography sx={{
                        width: "100%",
                        padding: "8px 0 0 0",
                        display: "flex",
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#000000"
                    }}>
                        About Company:
                    </Typography>
                    <Typography sx={{
                        width: "100%",
                        display: "flex",
                        fontSize: "14.5px",
                        fontWeight: "600",
                        color: "#000000"
                    }}>
                        About us
                    </Typography>
                    <Typography
                        sx={{
                        width: "100%",
                        height: "200px",
                        display: "flex",
                        fontSize: "13.8px",
                        textAlign: "start",
                        fontWeight: "300",
                        maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                        color: "#000000"
                    }}>
                        {job.jobDetailsFromCompany}
                    </Typography>
                    <Typography sx={{
                        padding: "0 0 10px 0",
                        fontSize: "14px",
                        color: "#4943da",
                    }}>
                        View Job
                    </Typography>
                </div>
                <div>
                    <Typography sx={{
                        width: "100%",
                        display: "flex",
                        padding: "20px 0 0 0",
                        fontSize: "14px",
                        fontWeight: "medium",
                        color: "#8b8b8b"
                    }}>
                        Minimum Experience
                    </Typography>
                    <Typography sx={{
                        width: "100%",
                        display: "flex",
                        fontSize: "14px",
                        fontWeight: "400"
                    }}>
                        {job.minExp} year{job.minExp && job.minExp > 1 && "s"}
                    </Typography>
                </div>
            </CardContent>
            <CardActions sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"

            }}>
                <Button sx={{
                    background: "#55efc4",
                    width: "95%",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 14px",
                    color: "#000000",
                    fontSize: "15.4px",
                    textTransform: "none",
                    '&:hover': {
                        background: "#55efc4",
                        boxShadow: 'none',
                    },
                    '&:active': {

                    },
                    '&:focus': {

                    },
                }} size={"large"}>⚡️ Easy Apply</Button>
                <Button sx={{
                    background: "#4943da",
                    width: "95%",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "10px 14px",
                    color: "#ffffff",
                    textTransform: "none",
                    '&:hover': {
                        background: "#4943da",
                        boxShadow: 'none',
                    },
                    '&:active': {

                    },
                    '&:focus': {

                    },
                }} size={"large"}>Ask for referral</Button>
            </CardActions>
        </Card>
    )
}
