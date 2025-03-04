/**
 * @license
 * Copyright 2018-2021 Streamlit Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import styled from "@emotion/styled"

export const StyledWidgetLabel = styled.label(({ theme }) => ({
  fontSize: theme.fontSizes.sm,
  color: theme.colors.bodyText,
  marginBottom: theme.spacing.halfSmFont,
  height: "auto",
  minHeight: theme.fontSizes.xl,
  verticalAlign: "middle",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}))

export const StyledWidgetLabelHelp = styled.div(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  flex: 1,
}))

export const StyledWidgetInstructions = styled.div(({ theme }) => ({
  fontSize: theme.fontSizes.sm,
  color: theme.colors.fadedText60,
  margin: theme.spacing.none,
  textAlign: "right",
  position: "absolute",
  bottom: 0,
  right: theme.spacing.halfSmFont,
}))

export const StyledWidgetLabelHelpInline = styled.label(({ theme }) => ({
  marginLeft: theme.spacing.xs,
  position: "relative",
  display: "flex",
  flexDirection: "row",
}))
