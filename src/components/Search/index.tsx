import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";

export default function SearchBar() {
  const theme = useTheme()

  return (
    <TextField
      id="outlined-basic"
      label="Search anything"
      variant="outlined"
      sx={{
        width: "344px",
        height: "40px",
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon sx={{color:theme.palette.primary.main}} fill={"secondary"}/>
          </InputAdornment>
        ),
        sx: {
          borderRadius: 25,
          color:theme.palette.secondary.main
        },
      }}
    />
  );
}
