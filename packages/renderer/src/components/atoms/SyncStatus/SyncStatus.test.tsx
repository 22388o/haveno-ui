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

import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { AppProviders } from "@atoms/AppProviders";
import { SyncStatus as SyncStatusOptions } from "@constants/sync-status";
import { SyncStatus } from ".";

describe("atoms::Sync Status", () => {
  it("renders the not synced status by default", () => {
    const { asFragment } = render(
      <AppProviders>
        <SyncStatus />
      </AppProviders>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the fully synced status", () => {
    const { asFragment } = render(
      <AppProviders>
        <SyncStatus status={SyncStatusOptions.Full} />
      </AppProviders>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the sync in progress status", () => {
    const { asFragment } = render(
      <AppProviders>
        <SyncStatus status={SyncStatusOptions.InProgress} />
      </AppProviders>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
