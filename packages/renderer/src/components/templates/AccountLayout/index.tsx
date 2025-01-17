// =============================================================================
//  Copyright 2022 Haveno
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
// =============================================================================

import { Group, createStyles, Box } from "@mantine/core";
import { NavbarLayout } from "@templates/NavbarLayout";
import { AccountSidebar } from "@organisms/AccountSidebar";

interface AccountContentProps {
  children: JSX.Element | JSX.Element[];
}

function AccountContent({ children }: AccountContentProps) {
  const { classes } = useStyles();

  return (
    <Group className={classes.container} spacing={0}>
      <AccountSidebar />
      <Box className={classes.contentArea}>{children}</Box>
    </Group>
  );
}

interface AccountLayoutProps {
  children: JSX.Element | JSX.Element[];
}

export function AccountLayout({ children }: AccountLayoutProps) {
  return (
    <NavbarLayout>
      <AccountContent>{children}</AccountContent>
    </NavbarLayout>
  );
}

const useStyles = createStyles((theme) => ({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  contentArea: {
    display: "flex",
    flex: 1,
    padding: theme.spacing.sm,
  },
}));
