import Link from "@/components/Link";
import { Grid2, Typography } from "@mui/material";

export default function Home() {
  return (
    <Grid2>
      <Typography variant="h2" fontWeight={700}>
        Hello, Next.js!
      </Typography>
      <Link href="/faq" label="Go to FAQ" />
    </Grid2>
  );
}
