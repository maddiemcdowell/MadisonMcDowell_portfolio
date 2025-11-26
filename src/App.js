import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import ProjectPage from "./components/ProjectPage";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route
          path="/project/hackathon"
          element={
            <ProjectPage
              title="Big Data Analytics Hackathon"
              description="Competed in and awarded a cash prize for a 2-day hackathon where I collaborated with a team of 4 to pitch HomeBase an innovative solution to centralize and improve access to resources for the homeless population in San Diego County. This project demonstrated my ability to work under pressure, collaborate effectively, and apply data analytics principles to real-world social issues."
              slideId="1aUUwDB-aeGulFPYoAWMPqosRYcKIOmjhXVv7UoFLFj4"
              techTags={[
                "Team Collaboration",
                "Data Analytics",
                "Problem Solving",
                "Presentation",
                "Social Impact",
              ]}
              githubLink="https://github.com/maddiemcdowell/portfolio"
              websiteLink="https://sites.google.com/view/homebasebda/home"
              projectImages={[
                {
                  caption: "Hackathon team collaboration",
                  src: "/images/Tezza-5956.JPG",
                  alt: "Big Data Analytics Hackathon team working together",
                },
                {
                  caption: "Presenting our HomeBase solution",
                  src: "/images/Tezza-0384.JPG",
                  alt: "Team presenting the hackathon solution",
                },
              ]}
            />
          }
        />
        <Route
          path="/project/health-belief-models"
          element={
            <ProjectPage
              title="Health Belief Models: COVID-19 Vaccines"
              description="Analyzed five COVID-19 vaccine behavior datasets (n = 100–1000+) using R to examine how the Health Belief Model can be utilized to predict vaccine willingness and acceptance. Cleaned and merged datasets, computed standardized z-scores, ran 25+ correlation tests, and built five linear regression models to extract behavioral insights across studies."
              slideId="1zIvD3XKqb1T4i14Y_sZSt23yx_nXzmnAAbpctQw8bEU"
              techTags={[
                "R",
                "Statistical Analysis",
                "Linear Regression",
                "Data Cleaning",
                "Hypothesis Testing",
                "ggplot2",
                "dplyr",
              ]}
              githubLink="https://github.com/maddiemcdowell/portfolio"
              codeSection={{
                title: "R Source Code",
                code: `library(dplyr)
dfHBM <- read.csv("checkHBM.csv")
shitu <- read.csv("shitu2022.csv")
kueh_100 <- read.csv("kueh2022_n100.csv")
kueh_171 <- read.csv("kueh2022_n171.csv")
karl <- read.csv("Form Responses 1-Table 1.csv")

#Summing Susceptibility, Severity, Benefits, and Barrier Variables for the 5 data sets

######################################################################################
# Sum vars for HBM dataset
dfHBM$SUStotal <- rowSums(dfHBM[, c("PSU1Cat", "PSU2Cat", "PSU3Cat")])
dfHBM$SEVtotal <- rowSums(dfHBM[, c("PSE1Cat", "PSE2Cat", "PSE3Cat")])
dfHBM$BENtotal <- rowSums(dfHBM[, c("PBE1Cat", "PBE2Cat", "PBE3Cat")])
dfHBM$BARtotal <- rowSums(dfHBM[, c("PBA1_Versa", "PBA2_Versa", "PBA3_Versa")])

# z scores
dfHBM$SUStotal_z <- (dfHBM$SUStotal - mean(dfHBM$SUStotal)) / sd(dfHBM$SUStotal)
dfHBM$SEVtotal_z <- (dfHBM$SEVtotal - mean(dfHBM$SEVtotal)) / sd(dfHBM$SEVtotal)
dfHBM$BENtotal_z <- (dfHBM$BENtotal - mean(dfHBM$BENtotal)) / sd(dfHBM$BENtotal)
dfHBM$BARtotal_z <- (dfHBM$BARtotal - mean(dfHBM$BARtotal)) / sd(dfHBM$BARtotal)
dfHBM$outcome_z <- (dfHBM$acceptence - mean(dfHBM$acceptence)) / sd(dfHBM$acceptence)

######################################################################################

# Sum vars for shitu dataset
shitu$SUStotal <- rowSums(shitu[, c("SUS1", "SUS2", "SUS3","SUS4","SUS5")])
shitu$SEVtotal <- rowSums(shitu[, c("SEV1", "SEV2", "SEV3","SEV4")])
shitu$BENtotal <- rowSums(shitu[, c("BEN1", "BEN2", "BEN3","BEN4","BEN5", "BEN6")])
shitu$BARtotal <- rowSums(shitu[, c("BAR1", "BAR2", "BAR3","BAR4","BAR5", "BAR6", "BAR7")])
shitu$PHBtotal <- rowSums(shitu[, c("PHB1", "PHB2", "PHB3","PHB4","PHB5", "PHB6", "PHB7", "PHB8")])

# z scores
shitu$SUStotal_z <- (shitu$SUStotal - mean(shitu$SUStotal)) / sd(shitu$SUStotal)
shitu$SEVtotal_z <- (shitu$SEVtotal - mean(shitu$SEVtotal)) / sd(shitu$SEVtotal)
shitu$BENtotal_z <- (shitu$BENtotal - mean(shitu$BENtotal)) / sd(shitu$BENtotal)
shitu$BARtotal_z <- (shitu$BARtotal - mean(shitu$BARtotal)) / sd(shitu$BARtotal)
shitu$outcome_z <- (shitu$PHBtotal - mean(shitu$PHBtotal)) / sd(shitu$PHBtotal)

######################################################################################

# Sum vars for kueh n100 dataset
kueh_100$SUStotal <- rowSums(kueh_100[, c("PSus1", "PSus2", "PSus3","PSus4","PSus5")])
kueh_100$SEVtotal <- rowSums(kueh_100[, c("PSev1", "PSev2", "PSev3","PSev4", "PSev5")])
kueh_100$BENtotal <- rowSums(kueh_100[, c("PBen1", "PBen2", "PBen3","PBen4")])
kueh_100$BARtotal <- rowSums(kueh_100[, c("PBar1", "PBar2", "PBar3","PBar4","PBar5","PBar6")])
kueh_100$PHBtotal <- rowSums(kueh_100[, c("HBI1", "HBI2", "HBI3","HBI4")])

# z scores
kueh_100$SUStotal_z <- (kueh_100$SUStotal - mean(kueh_100$SUStotal)) / sd(kueh_100$SUStotal)
kueh_100$SEVtotal_z <- (kueh_100$SEVtotal - mean(kueh_100$SEVtotal)) / sd(kueh_100$SEVtotal)
kueh_100$BENtotal_z <- (kueh_100$BENtotal - mean(kueh_100$BENtotal)) / sd(kueh_100$BENtotal)
kueh_100$BARtotal_z <- (kueh_100$BARtotal - mean(kueh_100$BARtotal)) / sd(kueh_100$BARtotal)
kueh_100$outcome_z <- (kueh_100$PHBtotal - mean(kueh_100$PHBtotal)) / sd(kueh_100$PHBtotal)

######################################################################################

# Sum vars for kueh n171 dataset
kueh_171$SUStotal <- rowSums(kueh_171[, c("PSus1", "PSus2", "PSus3","PSus4","PSus5")])
kueh_171$SEVtotal <- rowSums(kueh_171[, c("PSev1", "PSev2", "PSev3","PSev4", "PSev5")])
kueh_171$BENtotal <- rowSums(kueh_171[, c("PBen1", "PBen2", "PBen3","PBen4")])
kueh_171$BARtotal <- rowSums(kueh_171[, c("PBar1", "PBar2", "PBar3","PBar4","PBar5","PBar6")])
kueh_171$PHBtotal <- rowSums(kueh_171[, c("HBI1", "HBI2", "HBI3","HBI4")])

# z scores
kueh_171$SUStotal_z <- (kueh_171$SUStotal - mean(kueh_171$SUStotal)) / sd(kueh_171$SUStotal)
kueh_171$SEVtotal_z <- (kueh_171$SEVtotal - mean(kueh_171$SEVtotal)) / sd(kueh_171$SEVtotal)
kueh_171$BENtotal_z <- (kueh_171$BENtotal - mean(kueh_171$BENtotal)) / sd(kueh_171$BENtotal)
kueh_171$BARtotal_z <- (kueh_171$BARtotal - mean(kueh_171$BARtotal)) / sd(kueh_171$BARtotal)
kueh_171$outcome_z <- (kueh_171$PHBtotal - mean(kueh_171$PHBtotal)) / sd(kueh_171$PHBtotal)

######################################################################################

# Sum vars for karl dataset
karl$SUStotal <- rowSums(karl[, c("SS1", "SS2", "SS3","SS4","SS5")])
karl$SEVtotal <- rowSums(karl[, c("SEV1", "SEV2", "SEV3", "SEV4", "SEV5", "SEV6", "SEV7", "SEV8")])
karl$BENtotal <- rowSums(karl[, c("BEN1", "BEN2", "BEN3")])
karl$BARtotal <- rowSums(karl[, c("BAR1", "BAR2", "BAR3","BAR4","BAR5")])

# z scores
karl$SUStotal_z <- (karl$SUStotal - mean(karl$SUStotal)) / sd(karl$SUStotal)
karl$SEVtotal_z <- (karl$SEVtotal - mean(karl$SEVtotal)) / sd(karl$SEVtotal)
karl$BENtotal_z <- (karl$BENtotal - mean(karl$BENtotal)) / sd(karl$BENtotal)
karl$BARtotal_z <- (karl$BARtotal - mean(karl$BARtotal)) / sd(karl$BARtotal)
karl$outcome_z <- (karl$BEHAV7 - mean(karl$BEHAV7)) / sd(karl$BEHAV7)

# HBM correlations
# susceptibility, severity, benefits, and barriers correlated with willigness and acceptence
# equation: sus + sev + ben - bar correlated with willigness and acceptence
# willingness and acceptance are spelled wrong in the csv

HBM_corr <- dfHBM %>%
  mutate(
    Equation = SUStotal + SEVtotal + BENtotal - BARtotal
  ) %>%
  summarise(
    SUSwill = cor.test(SUStotal, Willigness)$estimate,
    SUSwill_lower = cor.test(SUStotal, Willigness)$conf.int[1],
    SUSwill_upper = cor.test(SUStotal, Willigness)$conf.int[2],

    SUSaccep = cor.test(SUStotal, acceptence)$estimate,
    SUSaccep_lower = cor.test(SUStotal, acceptence)$conf.int[1],
    SUSaccep_upper = cor.test(SUStotal, acceptence)$conf.int[2],

    SEVwill = cor.test(SEVtotal, Willigness)$estimate,
    SEVwill_lower = cor.test(SEVtotal, Willigness)$conf.int[1],
    SEVwill_upper = cor.test(SEVtotal, Willigness)$conf.int[2],

    SEVaccep = cor.test(SEVtotal, acceptence)$estimate,
    SEVaccep_lower = cor.test(SEVtotal, acceptence)$conf.int[1],
    SEVaccep_upper = cor.test(SEVtotal, acceptence)$conf.int[2],

    BENwill = cor.test(BENtotal, Willigness)$estimate,
    BENwill_lower = cor.test(BENtotal, Willigness)$conf.int[1],
    BENwill_upper = cor.test(BENtotal, Willigness)$conf.int[2],

    BENaccep = cor.test(BENtotal, acceptence)$estimate,
    BENaccep_lower = cor.test(BENtotal, acceptence)$conf.int[1],
    BENaccep_upper = cor.test(BENtotal, acceptence)$conf.int[2],

    BARwill = cor.test(BARtotal, Willigness)$estimate,
    BARwill_lower = cor.test(BARtotal, Willigness)$conf.int[1],
    BARwill_upper = cor.test(BARtotal, Willigness)$conf.int[2],

    BARaccep = cor.test(BARtotal, acceptence)$estimate,
    BARaccep_lower = cor.test(BARtotal, acceptence)$conf.int[1],
    BARaccep_upper = cor.test(BARtotal, acceptence)$conf.int[2],

    Equationwill = cor.test(Equation, Willigness)$estimate,
    Equationwill_lower = cor.test(Equation, Willigness)$conf.int[1],
    Equationwill_upper = cor.test(Equation, Willigness)$conf.int[2],
    
    Equationaccep = cor.test(Equation, acceptence)$estimate,
    Equationaccep_lower = cor.test(Equation, acceptence)$conf.int[1],
    Equationaccep_upper = cor.test(Equation, acceptence)$conf.int[2]
  )

# shitu correlations
# susceptibility, severity, benefits, and barriers correlated with PHB
# equation: sus + sev + ben - bar correlated with PHB

shitu_corr <- shitu %>%
  mutate(
    Equation = SUStotal + SEVtotal + BENtotal - BARtotal
  ) %>%
  summarise(
    SUScorr = cor.test(SUStotal, PHBtotal)$estimate,
    SUScorr_lower = cor.test(SUStotal, PHBtotal)$conf.int[1],
    SUScorr_upper = cor.test(SUStotal, PHBtotal)$conf.int[2],
    
    SEVcorr = cor.test(SEVtotal, PHBtotal)$estimate,
    SEVcorr_lower = cor.test(SEVtotal, PHBtotal)$conf.int[1],
    SEVcorr_upper = cor.test(SEVtotal, PHBtotal)$conf.int[2],
    
    BENcorr = cor.test(BENtotal, PHBtotal)$estimate,
    BENcorr_lower = cor.test(BENtotal, PHBtotal)$conf.int[1],
    BENcorr_upper = cor.test(BENtotal, PHBtotal)$conf.int[2],
    
    BARcorr = cor.test(BARtotal, PHBtotal)$estimate,
    BARcorr_lower = cor.test(BARtotal, PHBtotal)$conf.int[1],
    BARcorr_upper = cor.test(BARtotal, PHBtotal)$conf.int[2],
    
    Equationcorr = cor.test(Equation, PHBtotal)$estimate,
    Equationcorr_lower = cor.test(Equation, PHBtotal)$conf.int[1],
    Equationcorr_upper = cor.test(Equation, PHBtotal)$conf.int[2]
  )

# kueh n100 correlations
# susceptibility, severity, benefits, and barriers correlated with HBI
# equation: sus + sev + ben - bar correlated with HBI

kueh_100_corr <- kueh_100 %>%
  mutate(
    Equation = SUStotal + SEVtotal + BENtotal - BARtotal
  ) %>%
  summarise(
    SUScorr = cor.test(SUStotal, PHBtotal)$estimate,
    SUScorr_lower = cor.test(SUStotal, PHBtotal)$conf.int[1],
    SUScorr_upper = cor.test(SUStotal, PHBtotal)$conf.int[2],
    
    SEVcorr = cor.test(SEVtotal, PHBtotal)$estimate,
    SEVcorr_lower = cor.test(SEVtotal, PHBtotal)$conf.int[1],
    SEVcorr_upper = cor.test(SEVtotal, PHBtotal)$conf.int[2],
    
    BENcorr = cor.test(BENtotal, PHBtotal)$estimate,
    BENcorr_lower = cor.test(BENtotal, PHBtotal)$conf.int[1],
    BENcorr_upper = cor.test(BENtotal, PHBtotal)$conf.int[2],
    
    BARcorr = cor.test(BARtotal, PHBtotal)$estimate,
    BARcorr_lower = cor.test(BARtotal, PHBtotal)$conf.int[1],
    BARcorr_upper = cor.test(BARtotal, PHBtotal)$conf.int[2],
    
    Equationcorr = cor.test(Equation, PHBtotal)$estimate,
    Equationcorr_lower = cor.test(Equation, PHBtotal)$conf.int[1],
    Equationcorr_upper = cor.test(Equation, PHBtotal)$conf.int[2]
  )

# kueh n171 correlations
# susceptibility, severity, benefits, and barriers correlated with HBI
# equation: sus + sev + ben - bar correlated with HBI

kueh_171_corr <- kueh_171 %>%
  mutate(
    Equation = SUStotal + SEVtotal + BENtotal - BARtotal
  ) %>%
  summarise(
    SUScorr = cor.test(SUStotal, PHBtotal)$estimate,
    SUScorr_lower = cor.test(SUStotal, PHBtotal)$conf.int[1],
    SUScorr_upper = cor.test(SUStotal, PHBtotal)$conf.int[2],
    
    SEVcorr = cor.test(SEVtotal, PHBtotal)$estimate,
    SEVcorr_lower = cor.test(SEVtotal, PHBtotal)$conf.int[1],
    SEVcorr_upper = cor.test(SEVtotal, PHBtotal)$conf.int[2],
    
    BENcorr = cor.test(BENtotal, PHBtotal)$estimate,
    BENcorr_lower = cor.test(BENtotal, PHBtotal)$conf.int[1],
    BENcorr_upper = cor.test(BENtotal, PHBtotal)$conf.int[2],
    
    BARcorr = cor.test(BARtotal, PHBtotal)$estimate,
    BARcorr_lower = cor.test(BARtotal, PHBtotal)$conf.int[1],
    BARcorr_upper = cor.test(BARtotal, PHBtotal)$conf.int[2],
    
    Equationcorr = cor.test(Equation, PHBtotal)$estimate,
    Equationcorr_lower = cor.test(Equation, PHBtotal)$conf.int[1],
    Equationcorr_upper = cor.test(Equation, PHBtotal)$conf.int[2]
  )

karl_corr <- karl %>%
  mutate(
    Equation = SUStotal + SEVtotal + BENtotal - BARtotal
  ) %>%
  summarise(
    SUScorr = cor.test(SUStotal, BEHAV7)$estimate,
    SUScorr_lower = cor.test(SUStotal, BEHAV7)$conf.int[1],
    SUScorr_upper = cor.test(SUStotal, BEHAV7)$conf.int[2],
    
    SEVcorr = cor.test(SEVtotal, BEHAV7)$estimate,
    SEVcorr_lower = cor.test(SEVtotal, BEHAV7)$conf.int[1],
    SEVcorr_upper = cor.test(SEVtotal, BEHAV7)$conf.int[2],
    
    BENcorr = cor.test(BENtotal, BEHAV7)$estimate,
    BENcorr_lower = cor.test(BENtotal, BEHAV7)$conf.int[1],
    BENcorr_upper = cor.test(BENtotal, BEHAV7)$conf.int[2],
    
    BARcorr = cor.test(BARtotal, BEHAV7)$estimate,
    BARcorr_lower = cor.test(BARtotal, BEHAV7)$conf.int[1],
    BARcorr_upper = cor.test(BARtotal, BEHAV7)$conf.int[2],
    
    Equationcorr = cor.test(Equation, BEHAV7)$estimate,
    Equationcorr_lower = cor.test(Equation, BEHAV7)$conf.int[1],
    Equationcorr_upper = cor.test(Equation, BEHAV7)$conf.int[2]
  )

library(ggplot2)

HBM_corr_gg <- read.csv("handayani2022_corr.csv")
shitu_corr_gg <- read.csv("shitu2022_corr.csv")
kueh_100_corr_gg <- read.csv("kueh2022_n100_corr.csv")
kueh_171_corr_gg <- read.csv("kueh2022_n171_corr.csv")
karl_corr_gg <- read.csv("karl_corr.csv")

ggplot(data = HBM_corr_gg, aes(x = name, y = corr)) +
  geom_point() +
  geom_errorbar(aes(ymin = lb, ymax = ub), width = 0.2) +
  labs(x = "Variable Name", y = "Correlation", title = "handayani Correlations with Confidence Intervals") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1)) 
  
ggplot(data = shitu_corr_gg, aes(x = name, y = corr)) +
  geom_point() +
  geom_errorbar(aes(ymin = lb, ymax = ub), width = 0.2) +
  labs(x = "Variable Name", y = "Correlation", title = "shitu Correlations with Confidence Intervals") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1)) 

ggplot(data = kueh_100_corr_gg, aes(x = name, y = corr)) +
  geom_point() +
  geom_errorbar(aes(ymin = lb, ymax = ub), width = 0.2) +
  labs(x = "Variable Name", y = "Correlation", title = "kueh (n=100) Correlations with Confidence Intervals") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1)) 

ggplot(data = kueh_171_corr_gg, aes(x = name, y = corr)) +
  geom_point() +
  geom_errorbar(aes(ymin = lb, ymax = ub), width = 0.2) +
  labs(x = "Variable Name", y = "Correlation", title = "kueh (n=171) Correlations with Confidence Intervals") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1)) 

ggplot(data = karl_corr_gg, aes(x = name, y = corr)) +
  geom_point() +
  geom_errorbar(aes(ymin = lb, ymax = ub), width = 0.2) +
  labs(x = "Variable Name", y = "Correlation", title = "karl Correlations with Confidence Intervals") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1)) 

# HBM linear regression

y_will <- lm(data = dfHBM, Willigness ~ SUStotal + SEVtotal + BENtotal + BARtotal)
summary(y_will)
confint(y_will)
coef(y_will)
#plot(y_will)

y_accep <- lm(data = dfHBM, acceptence ~ SUStotal + SEVtotal + BENtotal + BARtotal)
summary(y_accep)
confint(y_accep)
coef(y_accep)
#plot(y_accep)

#willigness y = 1.2101 + 0.1920PSU - 0.0665PSE + 0.2331PBE - 0.0222PBA
#acceptance y = 2.8817 + 0.1713PSU + 0.0238PSE + 0.2100PBE - 0.0750PBA

# shitu linear regression

y_PHB <- lm(data = shitu, PHBtotal ~ SUStotal + SEVtotal + BENtotal + BARtotal)
summary(y_PHB)
confint(y_PHB)
coef(y_PHB)

#y = 16.2996 + 0.0880SUS + 0.2297SEV + 0.2606BEN -0.1820BAR

# kueh n100 linear regression

y_PHB_100 <- lm(data = kueh_100, PHBtotal ~ SUStotal + SEVtotal + BENtotal + BARtotal)
summary(y_PHB_100)
confint(y_PHB_100)
coef(y_PHB_100)

#y = 8.6503 - 0.0241SUS + 0.0719SEV + 0.3573BEN + 0.0112BAR

# kueh n171 linear regression

y_PHB_171 <- lm(data = kueh_171, PHBtotal ~ SUStotal + SEVtotal + BENtotal + BARtotal)
summary(y_PHB_171)
confint(y_PHB_171)
coef(y_PHB_171)

#y = 12.5377 + 0.0259SUS + 0.0695SEV + 0.3068BEN -0.1588BAR

# karl linear regression

y_BEHAV7 <- lm(data = karl, BEHAV7 ~ SUStotal + SEVtotal + BENtotal + BARtotal)
summary(y_BEHAV7)
confint(y_BEHAV7)
coef(y_BEHAV7)

#y = 3.5437 + 0.0515SUS - 0.0034SEV + 0.0438BEN -0.0081BAR

find_z <- function(df, study_num){
  z_df <- df %>%
    select(outcome_z, SUStotal_z, SEVtotal_z, BENtotal_z, BARtotal_z) %>%
    rename(y_z = outcome_z,
           SUS_z = SUStotal_z,
           SEV_z = SEVtotal_z,
           BEN_z = BENtotal_z,
           BAR_z = BARtotal_z) %>%
    mutate(Study = study_num)
  return(z_df)
}

# make new df for each dataset
dfHBM_z_df <- find_z(dfHBM, "1")
shitu_z_df <- find_z(shitu, "2")
kueh_100_z_df <- find_z(kueh_100, "3")
kueh_171_z_df <- find_z(kueh_171, "4")

# combine z score dfs
combined_z_df <- bind_rows(dfHBM_z_df, shitu_z_df, kueh_100_z_df, kueh_171_z_df)

library(lme4)
library(lmerTest)
lmer_test_all <- lmer(y_z ~ SUS_z + SEV_z + BEN_z + BAR_z + (1|Study), data = combined_z_df)

summary(lmer_test_all)
confint(lmer_test_all)
coef(lmer_test_all)

LMER_ALL <- data.frame(
  name = c("SUS", "SEV", "BEN", "BAR"),
  estimate = c(0.1268, 0.1058, 0.2432, -0.2387),
  lb = c(0.0732, 0.0516, 0.2030, -0.2775),
  ub = c(0.1805, 0.1600, 0.2834, -0.2000)
)

library(ggplot2)
ggplot(data = LMER_ALL, aes(x = name, y = estimate)) +
  geom_point() +
  geom_errorbar(aes(ymin = lb, ymax = ub), width = 0.2) +
  labs(x = "Variable Name", y = "Standardized Coefficient", title = "LMER Coefficients with Confidence Intervals for 4 Datasets") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1)) +
  geom_hline(yintercept = 0, linetype = "dashed", color = "gray50")

y_z_accep <- lm(data = dfHBM_z_df, y_z ~ SUS_z + SEV_z + BEN_z + BAR_z)
summary(y_z_accep)
confint(y_z_accep)
coef(y_z_accep)

y_z_accep_gg <- data.frame(
  name = c("SUS", "SEV", "BEN", "BAR"),
  estimate = c(2.223522e-01, 2.984963e-02, 2.439414e-01, -2.732901e-01),
  lb = c(0.12942052, -0.06237229, 0.19701762, -0.31883927),
  ub = c(0.31528381,0.12207155, 0.29086516, -0.22774098)
)

ggplot(data = y_z_accep_gg, aes(x = name, y = estimate)) +
  geom_point() +
  geom_errorbar(aes(ymin = lb, ymax = ub), width = 0.2) +
  labs(x = "Variable Name", y = "Standardized Coefficient", title = "Standardized Coefficients for HBM") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1)) +
  geom_hline(yintercept = 0, linetype = "dashed", color = "gray50")

y_z_shitu <- lm(data = shitu_z_df, y_z ~ SUS_z + SEV_z + BEN_z + BAR_z)
summary(y_z_shitu)
confint(y_z_shitu)
coef(y_z_shitu)

y_z_shitu_gg <- data.frame(
  name = c("SUS", "SEV", "BEN", "BAR"),
  estimate = c(4.902402e-02, 1.275227e-01, 1.865446e-01, -1.560859e-01),
  lb = c(-0.05227607,  0.02094897, 0.08198716, -0.25444212),
  ub = c(0.15032411,0.23409637, 0.29110200, -0.05772968)
)

ggplot(data = y_z_shitu_gg, aes(x = name, y = estimate)) +
  geom_point() +
  geom_errorbar(aes(ymin = lb, ymax = ub), width = 0.2) +
  labs(x = "Variable Name", y = "Standardized Coefficient", title = "Standardized Coefficients for Shitu") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1)) +
  geom_hline(yintercept = 0, linetype = "dashed", color = "gray50")

y_z_kueh_n100 <- lm(data = kueh_100_z_df, y_z ~ SUS_z + SEV_z + BEN_z + BAR_z)
summary(y_z_kueh_n100)
confint(y_z_kueh_n100)
coef(y_z_kueh_n100)

y_z_kueh_n100_gg <- data.frame(
  name = c("SUS", "SEV", "BEN", "BAR"),
  estimate = c(-3.377090e-02, 9.914144e-02 , 3.730572e-01, 1.688394e-02),
  lb = c(-0.2586239,  -0.1105895, 0.1668886, -0.1838508),
  ub = c(0.19108211,0.3088724, 0.5792257, 0.2176186)
)

ggplot(data = y_z_kueh_n100_gg, aes(x = name, y = estimate)) +
  geom_point() +
  geom_errorbar(aes(ymin = lb, ymax = ub), width = 0.2) +
  labs(x = "Variable Name", y = "Standardized Coefficient", title = "Standardized Coefficients for Kueh n=100") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1)) +
  geom_hline(yintercept = 0, linetype = "dashed", color = "gray50")

y_z_kueh_n171 <- lm(data = kueh_171_z_df, y_z ~ SUS_z + SEV_z + BEN_z + BAR_z)
summary(y_z_kueh_n171)
confint(y_z_kueh_n171)
coef(y_z_kueh_n171)

y_z_kueh_n171_gg <- data.frame(
  name = c("SUS", "SEV", "BEN", "BAR"),
  estimate = c(3.216072e-02, 9.472166e-02, 2.689299e-01, -2.432149e-01),
  lb = c(-0.11746822,  -0.06590045, 0.11198213, -0.38552547),
  ub = c(0.1817897,0.2553438, 0.4258777, -0.1009043)
)

ggplot(data = y_z_kueh_n171_gg, aes(x = name, y = estimate)) +
  geom_point() +
  geom_errorbar(aes(ymin = lb, ymax = ub), width = 0.2) +
  labs(x = "Variable Name", y = "Standardized Coefficient", title = "Standardized Coefficients for Kueh n=171") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1)) +
  geom_hline(yintercept = 0, linetype = "dashed", color = "gray50")

y_z_BEHAV7 <- lm(data = karl, outcome_z ~ SUStotal_z + SEVtotal_z + BENtotal_z + BARtotal_z)
summary(y_z_BEHAV7)
confint(y_z_BEHAV7)
coef(y_z_BEHAV7)

y_z_BEHAV7_gg <- data.frame(
  name = c("SUS", "SEV", "BEN", "BAR"),
  estimate = c(1.206423e-01, -1.663357e-02, 7.079794e-02, -1.701550e-02),
  lb = c(0.07235309,  -0.06680916, 0.02364495, -0.06388064),
  ub = c(0.16893145,0.03354202, 0.11795092, 0.02984964)
)

ggplot(data = y_z_BEHAV7_gg, aes(x = name, y = estimate)) +
  geom_point() +
  geom_errorbar(aes(ymin = lb, ymax = ub), width = 0.2) +
  labs(x = "Variable Name", y = "Standardized Coefficient", title = "Standardized Coefficients for Karl") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1)) +
  geom_hline(yintercept = 0, linetype = "dashed", color = "gray50")

y_z_accep_gg$model <- "HBM"
y_z_shitu_gg$model <- "shitu"
y_z_kueh_n100_gg$model <- "kueh n100"
y_z_kueh_n171_gg$model <- "kueh n171"
y_z_BEHAV7_gg$model <- "Karl"
LMER_ALL$model <-"LMER"

combined_df <- rbind(y_z_accep_gg, y_z_shitu_gg, y_z_kueh_n100_gg, y_z_kueh_n171_gg,y_z_BEHAV7_gg, LMER_ALL)

ggplot(combined_df, aes(x = name, y = estimate, color = model, shape = model)) +
  geom_point(position = position_dodge(width = 0.5), size = 3) +
  geom_errorbar(aes(ymin = lb, ymax = ub), 
                width = 0.2, position = position_dodge(width = 0.5)) +
  labs(
    x = "Variable Name", 
    y = "Standardized Coefficient", 
    title = "Standardized Coefficients by Model"
  ) +
  theme_minimal() +
  geom_hline(yintercept = 0, linetype = "dashed", color = "gray50") +
  theme(
    axis.text.x = element_text(angle = 45, hjust = 1),
    legend.title = element_blank()
  )`,
              }}
            />
          }
        />
        <Route
          path="/project/animal-shelter"
          element={
            <ProjectPage
              title="Long Beach Animal Shelter Analysis"
              description="Conducted exploratory data analysis on 29,000+ Long Beach Animal Shelter records. Built 3 R-based visualizations to analyze species intake distributions and created 2 Tableau visualizations to compare outcome type rates by species and highlight disparities in adoption vs. euthanasia outcomes."
              slideId="1R41EEChbKoJ5zarFaOiI4GzoEhpCF9Ap"
              googleDocsUrl="https://docs.google.com/document/d/13TnJCnUh6nmsgmAvBkquir8-xaKRlL_24jj1aIsrBdY/preview"
              techTags={[
                "R Programming",
                "Data Analysis",
                "Tableau",
                "Data Visualization",
                "Exploratory Data Analysis",
                "Animal Welfare",
                "Statistical Analysis",
              ]}
              githubLink="https://github.com/maddiemcdowell/portfolio"
            />
          }
        />
        <Route
          path="/project/coral-bleaching"
          element={
            <ProjectPage
              title="Coral Bleaching Data Analysis"
              description="Analyzed three datasets totaling 15,000+ entries to investigate ecological and climate-driven predictors of coral reef decline. Utilized the requests Python library to extract 8,700+ species-level coral occurrence records and web-scraped bleaching event records using Selenium and ChromeDriver, producing a cleaned dataset of 185 historical bleaching events. Built an interactive Tableau dashboard including five visualizations and conducted a Pearson correlation analysis revealing a positive linear relationship between sea surface temperature and bleaching severity."
              googleDocsUrl="https://docs.google.com/document/d/1qhnynkVud6Ni_o9n3HzyjkQ-wewecu_j0H2PzlzLafQ/preview"
              techTags={[
                "Python Programming",
                "Web Scraping",
                "Selenium",
                "Tableau",
                "Data Analysis",
                "Statistical Analysis",
                "Pearson Correlation",
                "Environmental Science",
                "Climate Research",
              ]}
              githubLink="https://github.com/maddiemcdowell/portfolio"
            />
          }
        />
        <Route
          path="/project/business-bootcamp"
          element={
            <ProjectPage
              title="Business Engineering Science Technology Bootcamp"
              description="Completed a 1-week certificate program where I collaborated with a team to pitch Olive, an AI-enhanced scheduling app. Awarded a cash prize in final business pitch presentation."
              slideId="1hEGnwuqF2Io6NNM1u1WmJercc0qBvuXX"
              projectImages={[{src: "/images/IMG_5517.JPG", alt: "Business Bootcamp Team Photo"}]}
              techTags={[
                "Business Pitch",
                "AI Technology",
                "Team Collaboration",
                "Presentation",
                "Product Development",
                "Certificate Program",
              ]}
              githubLink="https://github.com/maddiemcdowell/portfolio"
            />
          }
        />
        <Route
          path="/project/pathfinder"
          element={
            <ProjectPage
              title="Pathfinder - Senior Capstone"
              description="Co-developed an all-in-one career exploration web app used in the senior engineering showcase. Built core features that guide users through job discovery, skills mapping, and career planning. Collaborated with a 4-member team using agile workflows to deliver a functional MVP and presented project outcomes at the School of Engineering capstone presentation."
              slideId="YOUR_GOOGLE_SLIDES_ID_HERE"
              techTags={[
                "Web Development",
                "Agile",
                "Team Collaboration",
                "Full Stack",
                "MVP Development",
                "UI/UX",
              ]}
              githubLink="https://github.com/maddiemcdowell/portfolio"
              projectImages={[
                {
                  caption: "Pathfinder Poster",
                  src: "/images/Pathfinder Poster.png",
                },
                {
                  caption: "Home Page User Interface",
                  src: "/images/Home.png",
                },
              ]}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
