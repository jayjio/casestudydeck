<template>
  <div class="slide-deck-page">
    <SlideDeck :slides="slides" />
  </div>
</template>

<script setup lang="ts">
import SlideDeck from '../components/SlideDeck.vue'
// Uncomment to use helper functions for easier text editing:
// import { createCard, createHeading, createParagraph, createCardContainer, createTwoColumnLayout } from '../utils/slideHelpers'

// Use the blank layout so this page doesn't show the AI tool
definePageMeta({
  layout: 'blank'
})

/*
 * EASIER TEXT EDITING GUIDE:
 * 
 * Instead of editing HTML strings directly, you can use helper functions.
 * 
 * EXAMPLE - Before (hard to edit):
 *   content: `<div>...lots of HTML...<h3>Filtering</h3><p>Easy to use...</p>...</div>`
 * 
 * EXAMPLE - After (easy to edit):
 *   import { createCard, createHeading, createParagraph } from '../utils/slideHelpers'
 *   
 *   const cards = [
 *     { heading: 'Filtering', paragraph: 'Easy to use filtering, giving the user control...' },
 *     { heading: 'Familiarity', paragraph: 'Familiar design patterns...' }
 *   ]
 *   
 *   content: `
 *     <div style="...container styles...">
 *       ${createHeading('provider search')}
 *       ${createCardContainer(cards)}
 *     </div>
 *   `
 * 
 * Available helpers:
 *   - createHeading(text, level, options) - Creates h2/h3/h4 headings
 *   - createParagraph(text, options) - Creates styled paragraphs
 *   - createCard(heading, paragraph) - Creates a card with heading + paragraph
 *   - createCardContainer(cards[]) - Creates a container with multiple cards
 *   - createTwoColumnLayout(leftContent, rightImage, options) - Creates two-column layout
 */

// Define your slides here
const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
const imgProjectCover = 'http://localhost:3845/assets/9b1ae39bbe692c04965d4d7b9dbda75d30fd75e0.png'
const imgPortalNobg1 = 'http://localhost:3845/assets/81535d017720339ea0c64b7e7bb538e5bf6a5cd0.png'

const imgMemberJourney = 'https://cdn.prod.website-files.com/63991917e6746369a799b04e/68f6fb2f2971afdf6a28d68d_Group%2037.png'
const imgUserFlow = 'https://cdn.prod.website-files.com/63991917e6746369a799b04e/68eaf6fc63c97bfa25751637_Group%2042%20(1).png'
const imgWireframes = 'https://cdn.prod.website-files.com/63991917e6746369a799b04e/68f6fe5ead69127284355879_Group%2043.png'
const imgWireframes2 = 'https://cdn.prod.website-files.com/63991917e6746369a799b04e/68f6fce67442d69ed7446394_Group%2044.png'
const imgUIDesign = 'https://cdn.prod.website-files.com/63991917e6746369a799b04e/68eb0f97fb0a3bc06641a542_Group%2021.png'
const imgOccunetCover = 'https://cdn.prod.website-files.com/63991917e6746369a799b04e/68eabee8c982075b45d67f0a_Group%206%20(7).png'
const imgResearchMethods = 'https://cdn.prod.website-files.com/63991917e6746369a799b04e/68eaa4e8163dd2528696cc33_Group%2034%20(4).png'
const oocunet_wireframe = '/images/oocunet_wireframe.png'
const pwire = '/images/pwire.png'
const group44 = '/images/Group44.png'
const group27 = '/images/Group27.png'
const ps1 = '/images/ps1.png'
const ps2 = '/images/ps2.png'
const ps3 = '/images/ps3.png'
const ps4 = '/images/ps4.png'
const ps5 = '/images/ps5.png'
const ps7 = '/images/ps7.png'
const rp1 = '/images/rp1.png'
const rp1white = '/images/rp1white.png'
const rp2 = '/images/rp2.png'
const Q8 = '/images/Q8.png'
const Q13 = '/images/Q13.png'
const Q15 = '/images/q15.png'

const slides = [
  {
    id: 1,
    title: 'Title/cover',
    content: `
      <div style="display: flex; gap: 80px; align-items: flex-start; max-width: 1200px; margin: 0 auto; text-align: left;">
        <div style="flex: 1; display: flex; flex-direction: column; gap: 24px;">
          <h2 style="margin: 0; font-family: 'PP Formula', sans-serif; font-weight: 700; font-size: 72px; line-height: 78px; color: #FFF; font-style: normal;">Jeremy Giovannetti</h2>
          <h3 style="margin: 0; color: #F4C0BF; font-variant-numeric: lining-nums tabular-nums; font-feature-settings: 'liga' off, 'clig' off; font-family: 'PP Formula', sans-serif; font-size: 24px; font-style: normal; font-weight: 700; line-height: 38px; letter-spacing: 0.15px; text-transform: uppercase;">Portfolio Review</h3>
          <div style="font-family: 'Sora', sans-serif; font-weight: 400; font-size: 24px; line-height: 44px; color: #f0f0f0;">
            <p style="margin: 0;">November 2025 | Capital One</p>
          </div>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; gap: 24px;">
          <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-weight: 700; font-size: 24px; color: #fcf3ea;">What we'll cover</h3>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div style="background-color: rgba(34, 36, 43, 0.95); border: 1px solid rgba(244, 212, 192, 0.3); border-radius: 12px; padding: 16px 24px; display: flex; align-items: center; gap: 12px; backdrop-filter: blur(10px);">
            <span style="opacity: 0.6; font-size: 20px;">→</span>
            <span style="font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">About me</span>
          </div>
          <div style="background-color: rgba(34, 36, 43, 0.95); border: 1px solid rgba(244, 212, 192, 0.3); border-radius: 12px; padding: 16px 24px; display: flex; align-items: center; gap: 12px; backdrop-filter: blur(10px);">
            <span style="opacity: 0.6; font-size: 20px;">→</span>
            <a href="https://www.jeremygio.com/" target="_blank" rel="noopener noreferrer" style="font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch; text-decoration: underline; cursor: pointer;">AI portfolio project</a>
          </div>
          <div style="background-color: rgba(34, 36, 43, 0.95); border: 1px solid rgba(244, 212, 192, 0.3); border-radius: 12px; padding: 16px 24px; display: flex; align-items: center; gap: 12px; backdrop-filter: blur(10px);">
            <span style="opacity: 0.6; font-size: 20px;">→</span>
            <span style="font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Case study 1: Quext resident portal</span>
          </div>
          <div style="background-color: rgba(34, 36, 43, 0.95); border: 1px solid rgba(244, 212, 192, 0.3); border-radius: 12px; padding: 16px 24px; display: flex; align-items: center; gap: 12px; backdrop-filter: blur(10px);">
            <span style="opacity: 0.6; font-size: 20px;">→</span>
            <span style="font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Case study 2: Occunet member portal</span>
          </div>
          <div style="background-color: rgba(34, 36, 43, 0.95); border: 1px solid rgba(244, 212, 192, 0.3); border-radius: 12px; padding: 16px 24px; display: flex; align-items: center; gap: 12px; backdrop-filter: blur(10px);">
            <span style="opacity: 0.6; font-size: 20px;">→</span>
            <span style="font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Discussion</span>
          </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 2,
    title: 'Quext resident portal',
    content: `
      <div style="position: relative; width: 100%; max-width: 88%; margin: 0 auto; padding: 72px 72px 72px 32px; border-radius: 32px; display: flex; flex-direction: column; gap: 64px; box-sizing: border-box;">
        <div style="display: flex; gap: 72px; align-items: center;">
          <div style="flex: 0 0 40%; display: flex; flex-direction: column; gap: 36px; text-align: left;">
            <div>
              <h3 style="margin: 0; color: #F4C0BF; font-variant-numeric: lining-nums tabular-nums; font-feature-settings: 'liga' off, 'clig' off; font-family: 'PP Formula', sans-serif; font-size: 30px; font-style: normal; font-weight: 700; line-height: 38px; letter-spacing: 0.15px; text-transform: uppercase;">QUEXT</h3>
              <h1 style="margin: 12px 0 0 0; font-family: 'PP Formula', sans-serif; font-weight: 700; font-size: 56px; line-height: 64px; color: #fcf3ea; text-transform: lowercase;">Resident portal</h1>
            </div>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: #cdcdcd; max-width: 38ch;">Quext is a property management software and the smart-building / property technology arm of Madera Residential built to modernize over 120 properties such as apartments and multi-family communities.</p>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: #cdcdcd; max-width: 38ch;">As a part of this modernization, Quext sought to build a resident portal web and mobile application for residents to manage aspects of their renting experience.</p>
          </div>
          <div style="flex: 0 0 60%; position: relative; display: flex; justify-content: center;">
            <div style="position: relative; width: 100%; display: flex; align-items: center; justify-content: center;">
              <div style="width: 100%; border-radius: 32px; overflow: hidden; padding: 12px;">
                <img src="${rp1white}" alt="Occunet Member Portal" style="display: block; width: 100%; height: auto; border-radius: 32px;" />
              </div>
            </div>
          </div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 32px; align-items: start;">
          <div>
            <p style="margin: 0; color: #F4C0BF; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; line-height: 32px; text-transform: uppercase; letter-spacing: 0.15px;">My role</p>
            <p style="margin: 14px 0 0 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: #fcf3ea; max-width: 38ch;">UX Design Lead</p>
          </div>
          <div>
            <p style="margin: 0; color: #F4C0BF; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; line-height: 32px; text-transform: uppercase; letter-spacing: 0.15px;">Timeline</p>
            <p style="margin: 14px 0 0 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: #fcf3ea; max-width: 38ch;">8 Months</p>
          </div>
          <div>
            <p style="margin: 0; color: #F4C0BF; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; line-height: 32px; text-transform: uppercase; letter-spacing: 0.15px;">Team | Internal</p>
            <p style="margin: 14px 0 0 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.35; max-width: 38ch; color: #fcf3ea; opacity: 0.9;">UX Design Lead (me)<br />UI Designer<br />Product Owner<br />Senior Developer<br />Engineering Lead<br />Project Manager</p>
          </div>
          <div>
            <p style="margin: 0; color: #F4C0BF; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; line-height: 32px; text-transform: uppercase; letter-spacing: 0.15px;">Team | External</p>
            <p style="margin: 14px 0 0 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.35; max-width: 38ch; color: #fcf3ea; opacity: 0.9;">Engineering Lead<br />Front End Developer<br />QA Engineer<br />Back End Developer<br />Project Manager<br />CTO</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 3,
    title: 'Overview & goals',
    content: `
      <div style="position: relative; width: 100%; max-width: 90%; margin: 60px auto 0 auto; padding: 60px; border-radius: 32px; background-color: #21232a; display: flex; flex-direction: column; gap: 48px; box-sizing: border-box;">
        <div style="text-align: left; display: flex; flex-direction: column; gap: 24px;">
          <h2 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 48px; font-weight: 700; color: #fcf3ea; text-align: left;">Business goals</h2>
          <div style="display: flex; gap: 12px; width: 100%;">
            <div style="flex: 1 1 calc(33.333% - 8px); background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
              <h4 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 20px; font-weight: 700; color: #f4c0bf;">Improve operational efficiency</h4>
              <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">→ Automate rent collection, maintenance requests, and lease renewals to reduce staff workload and manual processing.</p>
              <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">→ Centralize communication and documentation between residents, property managers, and maintenance teams.</p>
            </div>
            <div style="flex: 1 1 calc(33.333% - 8px); background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
              <h4 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 20px; font-weight: 700; color: #f4c0bf;">Increase resident satisfaction and retention</h4>
              <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">→ Provide a self-service option for paying rent, reporting issues, and accessing community updates.</p>
              <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">→ Improve response times and transparency in resident issues</p>
            </div>
            <div style="flex: 1 1 calc(33.333% - 8px); background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
              <h4 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 20px; font-weight: 700; color: #f4c0bf;">Reduce costs and errors</h4>
              <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">→ Reduce operational costs and errors</p>
              <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">→ Integrate with accounting, CRM, and IoT systems to streamline data flow.</p>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 4,
    title: 'Research methods',
    content: `
      <div style="position: relative; width: 100%; max-width: 90%; margin: 0 auto; padding: 72px; border-radius: 32px; background-color: #21232a; display: flex; flex-direction: column; gap: 32px; box-sizing: border-box; text-align: left;">
        <h2 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 48px; font-weight: 700; color: #fcf3ea;">Research + insights</h2>
        <div style="display: flex; gap: 12px; width: 100%; box-sizing: border-box;">
          <div style="flex: 1 1 calc(50% - 6px); min-width: 0; background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 28px; padding: 40px; display: flex; flex-direction: column; gap: 16px; border: 1px solid rgba(98, 108, 143, 0.2); box-sizing: border-box;">
            <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 18px; font-weight: 700; text-transform: uppercase; color: #f4c0bf;">Method 1</h3>
            <h4 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 20px; font-weight: 700; color: #fcf3ea;">Survey</h4>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">I developed a survey to reach residents through social media, forums, and direct distribution, collecting quantitative data on portal usage frequency, access methods, and how it fits into their renting experience.</p>
            <h2 style="margin: 16px 0 0 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #fcf3ea;">Insights:</h2>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">→ 71% of residents use a mobile device to access their resident portal</p>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">→ 67% of residents reported a lack of transparency in service requests</p>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">→ 62% of residents reported a lack of communication in service requests</p>
          </div>
          <div style="flex: 1 1 calc(50% - 6px); min-width: 0; background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 28px; padding: 40px; display: flex; flex-direction: column; gap: 16px; border: 1px solid rgba(98, 108, 143, 0.2); box-sizing: border-box;">
            <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 18px; font-weight: 700; text-transform: uppercase; color: #f4c0bf;">Method 2</h3>
            <h4 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 20px; font-weight: 700; color: #fcf3ea;">Interviews</h4>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">I conducted 10 interviews to explore the why behind residents' experiences, identifying what worked well and what frustrated them. These insights guided where to focus design efforts.</p>
            <h2 style="margin: 16px 0 0 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #fcf3ea;">Insights:</h2>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">→ Service requests is one of the most frustrating and memorable aspects of renting. Akin to a make or break moment for the larger renting experience.</p>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">→ There is a lack of clarity around when the maintenance appointment is going to be, leading to stress for the resident.</p>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">→ Residents report maintenance not coming prepared to fix the issue and having to come back, sometimes multiple times, leading to it taking longer than expected.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 5,
    title: 'The problem',
    content: `
      <div style="position: relative; width: 100%; max-width: 90%; margin: 0 auto; padding: 72px; border-radius: 32px; background-color: #21232a; display: flex; flex-direction: column; gap: 32px; box-sizing: border-box; text-align: left;">
        <h2 style="margin: 0; padding-left: 32px; font-family: 'PP Formula', sans-serif; font-size: 48px; font-weight: 700; color: #fcf3ea;">The problem</h2>
        <p style="margin: 0; padding-left: 32px; font-family: 'Sora', sans-serif; font-size: 20px; line-height: 1.6; color: rgba(252, 243, 234, 0.9); max-width: 60ch;">What makes service requests and applications frustrating for the resident and front office?</p>
        <div style="display: flex; gap: 12px; width: 100%;">
          <div style="flex: 1 1 calc(33.333% - 8px); background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
            <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Manual + time intensive processes</h3>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">The process of submitting an application and service request currently has to be done through manual means. This leads to frustrations and inefficiency for both the property and residents</p>
          </div>
          <div style="flex: 1 1 calc(33.333% - 8px); background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
            <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Lack of transparency</h3>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">The resident is often left wondering what state their submission is in. With no centralized digital system, staff must juggle high volumes of requests across multiple channels from calls, emails, and walk-ins, making it difficult to track progress</p>
          </div>
          <div style="flex: 1 1 calc(33.333% - 8px); background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
            <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Lack of communication</h3>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">There's very little communication between the front office and resident during these critical periods, leading to confusion, delays, and strain</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 6,
    title: 'The solutions',
    content: `
      <div style="position: relative; width: 100%; max-width: 90%; margin: 0 auto; padding: 72px; border-radius: 32px; background-color: #21232a; display: flex; flex-direction: column; gap: 32px; box-sizing: border-box; text-align: left;">
        <h2 style="margin: 0; padding-left: 32px; font-family: 'PP Formula', sans-serif; font-size: 48px; font-weight: 700; color: #fcf3ea;">The solutions</h2>
        <p style="margin: 0; padding-left: 32px; font-family: 'Sora', sans-serif; font-size: 20px; line-height: 1.6; color: rgba(252, 243, 234, 0.9); max-width: 60ch;">What do we need to build in order to create the most value for residents?</p>
        <div style="display: flex; gap: 12px; width: 100%;">
          <div style="flex: 1 1 calc(33.333% - 8px); background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
            <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Direct communication + feedback</h3>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Allow the resident, front office, and maintenance to communicate directly through notes and chat, improving clarity and reducing miscommunication.</p>
          </div>
          <div style="flex: 1 1 calc(33.333% - 8px); background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
            <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Statuses, trackers, and updates</h3>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Develop a clear system for service requests and application statuses from open to closed. Offer a way for the user to see what the status of their request and application is.</p>
          </div>
          <div style="flex: 1 1 calc(33.333% - 8px); background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
            <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Conversational approach</h3>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Structure the content around what it's like to do a service request in person, like the system in the front office. For example, let's ask, "What's the problem in your unit" and "How would you like to be notified about updates"?</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 7,
    title: 'The process',
    content: `
      <div style="position: relative; width: 100%; max-width: 90%; margin: 0 auto; padding: 72px; border-radius: 32px; background-color: #21232a; display: flex; flex-direction: column; gap: 32px; box-sizing: border-box; text-align: left;">
        <div style="display: flex; flex-wrap: wrap; gap: 40px; align-items: flex-start;">
          <div style="flex: 1 1 320px; display: flex; flex-direction: column; gap: 24px;">
            <h2 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 48px; font-weight: 700; color: #fcf3ea;">The process</h2>
            <div>
              <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Understanding the journey</h3>
              <p style="margin: 12px 0 0 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">First, I mapped the ideal-state user journey with the team for submitting a service request, mapping every step from issue identification to resolution.</p>
              <h3 style="margin: 24px 0 0 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">The value</h3>
              <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 12px;">
                <div style="background-color: rgba(34, 36, 43, 0.95); border: 1px solid #f4c0bf; border-radius: 12px; padding: 16px 24px; display: flex; align-items: center; gap: 12px; backdrop-filter: blur(10px);">
                  <span style="opacity: 0.6; font-size: 20px;">→</span>
                  <span style="font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: #fcf3ea; max-width: 38ch;">Clarified the resident's point of view</span>
                </div>
                <div style="background-color: rgba(34, 36, 43, 0.95); border: 1px solid #f4c0bf; border-radius: 12px; padding: 16px 24px; display: flex; align-items: center; gap: 12px; backdrop-filter: blur(10px);">
                  <span style="opacity: 0.6; font-size: 20px;">→</span>
                  <span style="font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: #fcf3ea; max-width: 38ch;">Defined the ideal process from submit to complete</span>
                </div>
                <div style="background-color: rgba(34, 36, 43, 0.95); border: 1px solid #f4c0bf; border-radius: 12px; padding: 16px 24px; display: flex; align-items: center; gap: 12px; backdrop-filter: blur(10px);">
                  <span style="opacity: 0.6; font-size: 20px;">→</span>
                  <span style="font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: #fcf3ea; max-width: 38ch;">Served as a foundation for resident side statuses</span>
                </div>
              </div>
            </div>
          </div>
          <div style="flex: 1 1 423px; display: flex; justify-content: center; align-items: flex-start;">
            <div style="width: 100%; overflow: hidden; border-radius: 24px; border: 1px solid rgba(98, 108, 143, 0.2); background-color: #ECECF0; padding: 16px;">
              <img src="https://cdn.prod.website-files.com/63991917e6746369a799b04e/68f860ea07e77f6ca7ee44f3_rpjp.png" alt="User journey diagram" style="display: block; width: 100%; height: 444px; object-fit: cover;" />
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 8,
    title: 'The process',
    content: `
      <div style="position: relative; width: 100%; max-width: 90%; margin: 0 auto; padding: 72px; border-radius: 32px; background-color: #21232a; display: flex; flex-direction: column; gap: 32px; box-sizing: border-box; text-align: left;">
        <div style="display: flex; flex-wrap: wrap; gap: 40px; align-items: flex-start;">
          <div style="flex: 1 1 320px; display: flex; flex-direction: column; gap: 24px;">
            <h2 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 48px; font-weight: 700; color: #fcf3ea;">The process</h2>
            <div>
              <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Mapping it out</h3>
              <p style="margin: 12px 0 0 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">This phase focused on mapping the user flows from a high level to define how the service request process would function end to end.</p>
              <h3 style="margin: 24px 0 0 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">The value</h3>
              <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 12px;">
                <div style="background-color: rgba(34, 36, 43, 0.95); border: 1px solid #f4c0bf; border-radius: 12px; padding: 16px 24px; display: flex; align-items: center; gap: 12px; backdrop-filter: blur(10px);">
                  <span style="opacity: 0.6; font-size: 20px;">→</span>
                  <span style="font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: #fcf3ea; max-width: 38ch;">Mapped core user flows</span>
                </div>
                <div style="background-color: rgba(34, 36, 43, 0.95); border: 1px solid #f4c0bf; border-radius: 12px; padding: 16px 24px; display: flex; align-items: center; gap: 12px; backdrop-filter: blur(10px);">
                  <span style="opacity: 0.6; font-size: 20px;">→</span>
                  <span style="font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: #fcf3ea; max-width: 38ch;">Served as collaboration piece for stakeholders, development, and product</span>
                </div>
                <div style="background-color: rgba(34, 36, 43, 0.95); border: 1px solid #f4c0bf; border-radius: 12px; padding: 16px 24px; display: flex; align-items: center; gap: 12px; backdrop-filter: blur(10px);">
                  <span style="opacity: 0.6; font-size: 20px;">→</span>
                  <span style="font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: #fcf3ea; max-width: 38ch;">Helped clarify scope and ensure feasibility</span>
                </div>
              </div>
            </div>
          </div>
          <div style="flex: 1 1 423px; display: flex; justify-content: center; align-items: flex-start;">
            <div style="width: 100%; overflow: hidden; border-radius: 24px; border: 1px solid rgba(98, 108, 143, 0.2); background-color: #ECECF0; padding: 16px;">
              <img src="https://cdn.prod.website-files.com/63991917e6746369a799b04e/68f864f1770787d9a875de4a_Group%20334.png" alt="User flow mapping diagram" style="display: block; width: 100%; height: 444px; object-fit: cover;" />
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 9,
    title: 'The process',
    content: `
      <div style="position: relative; width: 100%; max-width: 90%; margin: 60px auto 0 auto; padding: 72px; border-radius: 32px; background-color: #21232a; display: flex; flex-direction: column; gap: 32px; box-sizing: border-box; text-align: left;">
        <div style="display: flex; gap: 40px; align-items: flex-start;">
          <div style="flex: 0 0 40%; display: flex; flex-direction: column; gap: 24px;">
            <h2 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 48px; font-weight: 700; color: #fcf3ea;">The process</h2>
            <div>
              <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Wireframing</h3>
              <p style="margin: 12px 0 0 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">The wireframing stage was also highly collaborative, focused on aligning the team around structure, functionality, and feasibility.</p>
              <h3 style="margin: 24px 0 0 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">The value</h3>
              <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 12px;">
                <div style="background-color: rgba(34, 36, 43, 0.95); border: 1px solid #f4c0bf; border-radius: 12px; padding: 16px 24px; display: flex; align-items: center; gap: 12px; backdrop-filter: blur(10px);">
                  <span style="opacity: 0.6; font-size: 20px;">→</span>
                  <span style="font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: #fcf3ea; max-width: 38ch;">Approval from the Quext side domain experts</span>
                </div>
                <div style="background-color: rgba(34, 36, 43, 0.95); border: 1px solid #f4c0bf; border-radius: 12px; padding: 16px 24px; display: flex; align-items: center; gap: 12px; backdrop-filter: blur(10px);">
                  <span style="opacity: 0.6; font-size: 20px;">→</span>
                  <span style="font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: #fcf3ea; max-width: 38ch;">Iterative in a low fidelity state</span>
                </div>
                <div style="background-color: rgba(34, 36, 43, 0.95); border: 1px solid #f4c0bf; border-radius: 12px; padding: 16px 24px; display: flex; align-items: center; gap: 12px; backdrop-filter: blur(10px);">
                  <span style="opacity: 0.6; font-size: 20px;">→</span>
                  <span style="font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: #fcf3ea; max-width: 38ch;">Defined core architecture and structure</span>
                </div>
              </div>
            </div>
          </div>
          <div style="flex: 0 0 60%; display: flex; justify-content: center; align-items: flex-start;">
            <div style="width: 100%; overflow: hidden; border-radius: 24px; border: 1px solid rgba(98, 108, 143, 0.2); background-color: #F8F8F8;">
              <img src="https://cdn.prod.website-files.com/63991917e6746369a799b04e/68f86829f5ebbd205a10404d_Group%20343.png" alt="Wireframes diagram" style="display: block; width: 100%; height: auto;" />
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 10,
    title: 'UI + visual design',
    content: `
      <div style="position: relative; width: 100%; max-width: 90%; margin: 0 auto; padding: 72px; border-radius: 32px; background-color: #21232a; display: flex; flex-direction: column; gap: 32px; box-sizing: border-box; text-align: left;">
        <div style="display: flex; flex-wrap: wrap; gap: 40px; align-items: flex-start;">
          <div style="flex: 1 1 320px; display: flex; flex-direction: column; gap: 24px;">
            <h2 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 48px; font-weight: 700; color: #fcf3ea;">UI + visual design</h2>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">In the next step of the process, we translated approved wireframes into high-fidelity UI designs and a scalable design system.</p>
            <div style="display: flex; flex-direction: column; gap: 24px; margin-top: 24px;">
              <div style="background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
                <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Balancing accessibility and aesthetic</h3>
                <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Quext sought a distinct design that would set it apart in the property management space, but that needed to be balanced with a wide range of users + needs</p>
              </div>
              <div style="background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
                <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Scalable design system</h3>
                <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Quext currently operated 120+ properties, with the plans to expand. The design system was built in Figma with collaboration and iteration at the heart</p>
              </div>
            </div>
          </div>
          <div style="flex: 1 1 423px; display: flex; justify-content: center; align-items: flex-start;">
            <div style="width: 100%; overflow: hidden; border-radius: 24px; border: 1px solid rgba(98, 108, 143, 0.2); background-color: #F6EBE2; padding: 16px;">
              <img src="https://cdn.prod.website-files.com/63991917e6746369a799b04e/68f86c864db75ea728421f7e_Quextrrp.png" alt="UI Design" style="display: block; width: 100%; height: 460px; object-fit: cover;" />
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 11,
    title: 'Service requests',
    content: `
      <div style="position: relative; width: 100%; max-width: 90%; margin: 0 auto; padding: 72px; border-radius: 32px; background-color: #21232a; display: flex; flex-direction: column; gap: 32px; box-sizing: border-box; text-align: left;">
        <div style="display: flex; flex-wrap: wrap; gap: 40px; align-items: flex-start;">
          <div style="flex: 1 1 320px; display: flex; flex-direction: column; gap: 24px;">
            <h2 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 48px; font-weight: 700; color: #fcf3ea;">Service requests</h2>
            <div style="display: flex; flex-direction: column; gap: 24px;">
              <div style="background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
                <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Conversational approach</h3>
                <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">The request models the conversation a resident might have with the front office, walking through the issue step by step</p>
              </div>
              <div style="background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
                <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Feedback + communication</h3>
                <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">The resident has notification options to stay informed about the service request, driving at our initial goal to improve communication between the front office and residents</p>
              </div>
            </div>
          </div>
          <div style="flex: 1 1 460px; display: flex; justify-content: center; align-items: flex-start;">
            <div style="width: 100%; overflow: hidden; border-radius: 24px; border: 1px solid rgba(98, 108, 143, 0.2);">
              <img src="${Q15}" alt="Service requests" style="display: block; width: 100%; height: auto;" />
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 12,
    title: 'Service requests',
    content: `
      <div style="position: relative; width: 100%; max-width: 90%; margin: 0 auto; padding: 72px; border-radius: 32px; background-color: #21232a; display: flex; flex-direction: column; gap: 32px; box-sizing: border-box; text-align: left;">
        <div style="display: flex; flex-wrap: wrap; gap: 40px; align-items: flex-start;">
          <div style="flex: 1 1 320px; display: flex; flex-direction: column; gap: 24px;">
            <h2 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 48px; font-weight: 700; color: #fcf3ea;">Service requests</h2>
            <div style="display: flex; flex-direction: column; gap: 24px;">
              <div style="background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
                <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Status + tracking</h3>
                <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Statuses were implemented to track and manage service requests, and the resident has visibility into where things stand, supporting our goal of transparency</p>
              </div>
              <div style="background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
                <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Communication</h3>
                <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">The resident, front office, and maintenance have the ability to add notes directly to a service request, as well as clearly see the scheduled date of maintenance, supporting our goal of communication.</p>
              </div>
            </div>
          </div>
          <div style="flex: 1 1 460px; display: flex; justify-content: center; align-items: flex-start;">
            <div style="width: 100%; overflow: hidden; border-radius: 24px; border: 1px solid rgba(98, 108, 143, 0.2);">
              <img src="${Q13}" alt="Service requests" style="display: block; width: 100%; height: auto;" />
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 13,
    title: 'Results',
    content: `
      <div style="position: relative; width: 100%; margin: 0 auto; padding: 72px; border-radius: 32px; background-color: #21232a; display: flex; flex-direction: column; gap: 32px; box-sizing: border-box; text-align: left;">
        <h2 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 48px; font-weight: 700; color: #fcf3ea;">Results</h2>
        <div style="width: 100%; max-width: 90%; margin: 0 auto; overflow: hidden; border-radius: 24px; border: 1px solid rgba(98, 108, 143, 0.2); background-color: #E8DDFA;">
          <img src="https://cdn.prod.website-files.com/63991917e6746369a799b04e/68f870a189687811636d4171_Quextwrap.png" alt="Results" style="display: block; width: 100%; height: auto;" />
              </div>
        <div style="display: flex; gap: 12px; width: 100%; flex-wrap: nowrap;">
          <div style="flex: 1 1 0; background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
            <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Improved communication</h3>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Enabled clear, two-way communication between residents and the front office throughout the service request process.</p>
              </div>
          <div style="flex: 1 1 0; background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
            <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Increased transparency</h3>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Provided real-time visibility into request status, updates, and completion, creating trust and reducing uncertainty.</p>
              </div>
          <div style="flex: 1 1 0; background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
            <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Improved efficiency</h3>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Unified workflows for maintenance and property staff, reducing delays and manual tracking while speeding up issue resolution.</p>
            </div>
          </div>
              </div>
    `
  },
  {
    id: 14,
    title: 'Questions?',
    content: `
      <div style="position: relative; width: 100%; max-width: 80%; margin: 0 auto; padding: 72px; border-radius: 32px; background-color: #21232a; display: flex; flex-direction: column; gap: 32px; box-sizing: border-box; text-align: center; align-items: center; justify-content: center; min-height: 60vh;">
        <h1 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 72px; font-weight: 700; color: #fcf3ea;">Questions?</h1>
      </div>
    `
  },
  {
    id: 15,
    title: 'Occunet healthcare portal',
    content: `
      <div style="position: relative; width: 100%; max-width: 88%; margin: 0 auto; padding: 72px 72px 72px 32px; border-radius: 32px; display: flex; flex-direction: column; gap: 64px; box-sizing: border-box;">
        <div style="display: flex; gap: 72px; align-items: center;">
          <div style="flex: 0 0 40%; display: flex; flex-direction: column; gap: 36px; text-align: left;">
            <div>
              <h3 style="margin: 0; color: #F4C0BF; font-variant-numeric: lining-nums tabular-nums; font-feature-settings: 'liga' off, 'clig' off; font-family: 'PP Formula', sans-serif; font-size: 30px; font-style: normal; font-weight: 700; line-height: 38px; letter-spacing: 0.15px; text-transform: uppercase;">Occunet + Fairos</h3>
              <h1 style="margin: 12px 0 0 0; font-family: 'PP Formula', sans-serif; font-weight: 700; font-size: 56px; line-height: 64px; color: #fcf3ea; text-transform: lowercase;">member portal</h1>
            </div>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: #cdcdcd; max-width: 38ch;">For this project, I led the end-to end design for a healthcare insurance portal where users can find in network providers easily and take more control over their bills</p>
          </div>
          <div style="flex: 0 0 60%; position: relative; display: flex; justify-content: center;">
            <div style="position: relative; width: 100%; display: flex; align-items: center; justify-content: center;">
              <div style="width: 100%; border-radius: 32px; overflow: hidden;">
                <img src="${imgOccunetCover}" alt="Occunet Member Portal" style="display: block; width: 100%; height: auto; border-radius: 32px;" />
              </div>
            </div>
          </div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 32px; align-items: start;">
          <div>
            <p style="margin: 0; color: #F4C0BF; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; line-height: 32px; text-transform: uppercase; letter-spacing: 0.15px;">My role</p>
            <p style="margin: 14px 0 0 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: #fcf3ea; max-width: 38ch;">Product Design Lead</p>
          </div>
          <div>
            <p style="margin: 0; color: #F4C0BF; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; line-height: 32px; text-transform: uppercase; letter-spacing: 0.15px;">Timeline</p>
            <p style="margin: 14px 0 0 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: #fcf3ea; max-width: 38ch;">4 Months</p>
          </div>
          <div>
            <p style="margin: 0; color: #F4C0BF; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; line-height: 32px; text-transform: uppercase; letter-spacing: 0.15px;">Team | Internal</p>
            <p style="margin: 14px 0 0 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.35; max-width: 38ch; color: #fcf3ea; opacity: 0.9;">Product Designer (me)<br />Senior UI Designer<br />Product Owner<br />Dev Lead<br />CTO</p>
          </div>
          <div>
            <p style="margin: 0; color: #F4C0BF; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; line-height: 32px; text-transform: uppercase; letter-spacing: 0.15px;">Team | External</p>
            <p style="margin: 14px 0 0 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.35; max-width: 38ch; color: #fcf3ea; opacity: 0.9;">Engineering Lead<br />Front End Developer<br />QA Engineer<br />Back End Developer<br />Project Manager<br />CTO</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 16,
    title: 'Overview & goals',
    content: `
      <div style="position: relative; width: 100%; max-width: 90%; margin: 60px auto 0 auto; padding: 60px; border-radius: 32px; background-color: #21232a; display: flex; flex-direction: column; gap: 48px; box-sizing: border-box;">
        <div style="display: flex; gap: 40px; align-items: flex-start; text-align: left;">
          <div style="flex: 0 0 50%; display: flex; justify-content: center; align-items: flex-start;">
            <div style="width: 100%; overflow: hidden; border-radius: 24px;">
              <img src="${ps5}" alt="Occunet Member Portal" style="display: block; width: 100%; height: auto;" />
            </div>
          </div>
          <div style="flex: 0 0 50%; display: flex; flex-direction: column; gap: 16px; margin-top: 16px;">
            <h2 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 48px; font-weight: 700; color: #fcf3ea;">Member portal</h2>
            <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; text-transform: uppercase; color: #f4c0bf;">Overview</h3>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">OccuNet is a healthcare cost-containment company that helps companies and health plan members save money on medical bills by negotiating prices with providers and managing out-of-network claims.</p>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Occunet aims to use their own technology to make healthcare costs more transparent and easier to control.</p>
          </div>
        </div>
        <div style="text-align: left; display: flex; flex-direction: column; gap: 24px;">
          <h2 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 48px; font-weight: 700; color: #fcf3ea; text-align: left;">Business goals</h2>
          <div style="display: flex; gap: 12px; width: 100%;">
            <div style="flex: 1 1 calc(33.333% - 8px); background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
              <h4 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 20px; font-weight: 700; color: #f4c0bf;">Increase member self service</h4>
              <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">→ Allow members to find providers, view claims, and manage bills without calling support</p>
              <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">→ Reduce administrative overhead and support demand</p>
            </div>
            <div style="flex: 1 1 calc(33.333% - 8px); background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
              <h4 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 20px; font-weight: 700; color: #f4c0bf;">Improve member satisfaction and retention</h4>
              <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">→ Address consistent member support frustrations in finding providers</p>
              <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">→ Increase member control and transparency in bill management</p>
            </div>
            <div style="flex: 1 1 calc(33.333% - 8px); background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
              <h4 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 20px; font-weight: 700; color: #f4c0bf;">Reduce out-of-network claim costs</h4>
              <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">→ Help members easily find in-network providers to avoid expensive out-of-network bills</p>
              <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">→ Lower overall claims and negotiation volume by offering self service</p>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 17,
    title: 'Research methods',
    content: `
      <div style="position: relative; width: 100%; max-width: 90%; margin: 0 auto; padding: 72px; border-radius: 32px; background-color: #21232a; display: flex; gap: 40px; box-sizing: border-box; text-align: left; align-items: flex-start;">
        <div style="flex: 0 0 33%; display: flex; flex-direction: column; gap: 32px;">
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <h2 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 48px; font-weight: 700; color: #fcf3ea;">Research</h2>
          </div>
          <div style="display: flex; flex-direction: column; gap: 24px;">
            <div style="background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 28px; padding: 40px; display: flex; flex-direction: column; gap: 16px; border: 1px solid rgba(98, 108, 143, 0.2);">
              <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 18px; font-weight: 700; text-transform: uppercase; color: #f4c0bf;">Method 1</h3>
              <h4 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 20px; font-weight: 700; color: #fcf3ea;">Analytics Review</h4>
              <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Baseline review of the existing performance and identification of metrics to improve.</p>
            </div>
            <div style="background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 28px; padding: 40px; display: flex; flex-direction: column; gap: 16px; border: 1px solid rgba(98, 108, 143, 0.2);">
              <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 18px; font-weight: 700; text-transform: uppercase; color: #f4c0bf;">Method 2</h3>
              <h4 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 20px; font-weight: 700; color: #fcf3ea;">Support + Surveys</h4>
              <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Review of support ticket forms and surveys pointed directly to where frustrations were for members.</p>
            </div>
          </div>
        </div>
        <div style="flex: 0 0 66%; display: flex; justify-content: center; align-items: flex-start;">
          <div style="width: 100%; overflow: hidden; border-radius: 24px;">
            <img src="${imgResearchMethods}" alt="Research Methods" style="display: block; width: 100%; height: auto;" />
          </div>
        </div>
      </div>
    `
  },
  {
    id: 18,
    title: 'The problem',
    content: `
      <div style="position: relative; width: 100%; max-width: 90%; margin: 0 auto; padding: 72px; border-radius: 32px; background-color: #21232a; display: flex; flex-direction: column; gap: 32px; box-sizing: border-box; text-align: left;">
        <h2 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 48px; font-weight: 700; color: #fcf3ea;">The problem</h2>
        <div style="display: flex; gap: 12px; width: 100%;">
          <div style="flex: 1 1 calc(33.333% - 8px); background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
            <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">A fragmented experience</h3>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Users have to jump between insurer sites, provider pages, and third-party tools to confirm coverage.</p>
          </div>
          <div style="flex: 1 1 calc(33.333% - 8px); background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
            <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Unclear network details</h3>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">It's not always obvious whether a specific provider, location, or specialist is actually in-network for their exact plan.</p>
          </div>
          <div style="flex: 1 1 calc(33.333% - 8px); background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
            <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Poor search tools</h3>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Filters and search results can be inconsistent or too broad, forcing users to sift through irrelevant options.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 19,
    title: 'Tangible solutions',
    content: `
      <div style="position: relative; width: 100%; max-width: 90%; margin: 0 auto; padding: 72px; border-radius: 32px; background-color: #21232a; display: flex; flex-direction: column; gap: 32px; box-sizing: border-box; text-align: left;">
        <h2 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 48px; font-weight: 700; color: #fcf3ea;">The solutions</h2>
        <div style="display: flex; gap: 12px; width: 100%;">
          <div style="flex: 1 1 calc(33.333% - 8px); background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
            <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Universal and supportive search</h3>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Users expect to see all options in one place, in-network vs. out-of-network clearly, and to search based on those parameters.</p>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">→ Clear network indicators</p>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">→ Support for searches that yield no results</p>
          </div>
          <div style="flex: 1 1 calc(33.333% - 8px); background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
            <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Discoverability: Browse vs search</h3>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Search should be supplemented with browsing to support users who know what they're looking for and those who don't.</p>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">→ Flows for users that may not engage in a search</p>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">→ Balance findability and discoverability</p>
          </div>
          <div style="flex: 1 1 calc(33.333% - 8px); background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
            <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Offer familiar design patterns</h3>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Users expect a similar experience to Google Maps or Yelp in terms of filtering, mapping, and viewing providers.</p>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">→ List and map view to search and browse providers</p>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">→ Mobile first design approach</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 20,
    title: 'Design process',
    content: `
      <div style="position: relative; width: 100%; max-width: 90%; margin: 0 auto; padding: 72px; border-radius: 32px; background-color: #21232a; display: flex; flex-direction: column; gap: 32px; box-sizing: border-box; text-align: left;">
        <div style="display: flex; flex-wrap: wrap; gap: 40px; align-items: flex-start;">
          <div style="flex: 1 1 320px; display: flex; flex-direction: column; gap: 24px;">
            <h2 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 48px; font-weight: 700; color: #fcf3ea;">The process</h2>
            <div>
              <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Mapping it out</h3>
              <p style="margin: 12px 0 0 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Drawing from our discovery and research, I mapped the customer journey to understand pain points and opportunities for improvement within the app.</p>
              <h3 style="margin: 24px 0 0 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">The value</h3>
              <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 12px;">
                <div style="background-color: rgba(34, 36, 43, 0.95); border: 1px solid #f4c0bf; border-radius: 12px; padding: 16px 24px; display: flex; align-items: center; gap: 12px; backdrop-filter: blur(10px);">
                  <span style="opacity: 0.6; font-size: 20px;">→</span>
                  <span style="font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: #fcf3ea; max-width: 38ch;">Built a foundation to understand workflows</span>
                </div>
                <div style="background-color: rgba(34, 36, 43, 0.95); border: 1px solid #f4c0bf; border-radius: 12px; padding: 16px 24px; display: flex; align-items: center; gap: 12px; backdrop-filter: blur(10px);">
                  <span style="opacity: 0.6; font-size: 20px;">→</span>
                  <span style="font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: #fcf3ea; max-width: 38ch;">Clarified areas to focus</span>
                </div>
                <div style="background-color: rgba(34, 36, 43, 0.95); border: 1px solid #f4c0bf; border-radius: 12px; padding: 16px 24px; display: flex; align-items: center; gap: 12px; backdrop-filter: blur(10px);">
                  <span style="opacity: 0.6; font-size: 20px;">→</span>
                  <span style="font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: #fcf3ea; max-width: 38ch;">Clarified operational and service design "The bigger picture" and how we fit in</span>
                </div>
              </div>
            </div>
          </div>
          <div style="flex: 1 1 423px; display: flex; justify-content: center; align-items: flex-start;">
            <div style="width: 100%; overflow: hidden; border-radius: 24px; border: 1px solid rgba(98, 108, 143, 0.2); background-color: #ECECF0; padding: 16px;">
              <img src="${imgMemberJourney}" alt="Member journey and search flow diagram" style="display: block; width: 100%; height: 444px; object-fit: cover;" />
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 21,
    title: 'Wireframes',
    content: `
      <div style="position: relative; width: 100%; max-width: 90%; margin: 60px auto 0 auto; padding: 72px; border-radius: 32px; background-color: #21232a; display: flex; flex-direction: column; gap: 32px; box-sizing: border-box; text-align: left;">
        <div style="display: flex; gap: 40px; align-items: flex-start;">
          <div style="flex: 0 0 40%; display: flex; flex-direction: column; gap: 24px;">
            <h2 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 48px; font-weight: 700; color: #fcf3ea;">The process</h2>
            <div>
              <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Down to the wires</h3>
              <p style="margin: 12px 0 0 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">The wireframing process was done in Whimsical to ensure collaboration across teams. My focus was on alignment and approval to move forward</p>
              <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 20px;">
                <div style="background-color: rgba(34, 36, 43, 0.95); border: 1px solid #f4c0bf; border-radius: 12px; padding: 16px 24px; display: flex; align-items: center; gap: 12px; backdrop-filter: blur(10px);">
                  <span style="opacity: 0.6; font-size: 20px;">→</span>
                  <span style="font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: #fcf3ea; max-width: 38ch;">Visually define key user flows</span>
                </div>
                <div style="background-color: rgba(34, 36, 43, 0.95); border: 1px solid #f4c0bf; border-radius: 12px; padding: 16px 24px; display: flex; align-items: center; gap: 12px; backdrop-filter: blur(10px);">
                  <span style="opacity: 0.6; font-size: 20px;">→</span>
                  <span style="font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: #fcf3ea; max-width: 38ch;">Test and validate design patterns</span>
                </div>
                <div style="background-color: rgba(34, 36, 43, 0.95); border: 1px solid #f4c0bf; border-radius: 12px; padding: 16px 24px; display: flex; align-items: center; gap: 12px; backdrop-filter: blur(10px);">
                  <span style="opacity: 0.6; font-size: 20px;">→</span>
                  <span style="font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: #fcf3ea; max-width: 38ch;">Ensure scope and feasibility</span>
                </div>
                <div style="background-color: rgba(34, 36, 43, 0.95); border: 1px solid #f4c0bf; border-radius: 12px; padding: 16px 24px; display: flex; align-items: center; gap: 12px; backdrop-filter: blur(10px);">
                  <span style="opacity: 0.6; font-size: 20px;">→</span>
                  <span style="font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: #fcf3ea; max-width: 38ch;">Collaborate and align with stakeholders, development, and product</span>
                </div>
              </div>
            </div>
          </div>
          <div style="flex: 0 0 60%; display: flex; justify-content: center; align-items: flex-start;">
            <div style="width: 100%; overflow: hidden; border-radius: 24px; border: 1px solid rgba(98, 108, 143, 0.2); background-color: #F8F8F8;">
              <img src="${ps7}" alt="Wireframes diagram" style="display: block; width: 100%; height: auto;" />
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 22,
    title: 'UI design',
    content: `
      <div style="position: relative; width: 100%; margin: 0 auto; padding: 72px; border-radius: 32px; background-color: #21232a; display: flex; flex-direction: column; gap: 32px; box-sizing: border-box; text-align: left;">
        <div style="display: flex; flex-wrap: wrap; gap: 40px; align-items: flex-start;">
          <div style="flex: 1 1 320px; display: flex; flex-direction: column; gap: 24px;">
            <h2 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 48px; font-weight: 700; color: #fcf3ea;">UI design</h2>
            <div style="display: flex; gap: 12px; width: 100%; flex-wrap: wrap;">
              <div style="flex: 1 1 calc(33.333% - 8px); min-width: 200px; background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
                <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Accessibility first</h3>
                <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">High contrast, larger type, and simple elements.</p>
              </div>
              <div style="flex: 1 1 calc(33.333% - 8px); min-width: 200px; background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
                <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Intentional color</h3>
                <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Clear indicators for providers, balance bill status, in-network status.</p>
              </div>
              <div style="flex: 1 1 calc(33.333% - 8px); min-width: 200px; background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
                <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Responsive design system</h3>
                <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Figma was used to build a design system that standardized brand elements and layouts for both mobile and desktop.</p>
              </div>
            </div>
          </div>
          <div style="flex: 1 1 423px; display: flex; justify-content: center; align-items: flex-start;">
            <div style="width: 100%; overflow: hidden; border-radius: 24px; border: 1px solid rgba(98, 108, 143, 0.2); background-color: #F6F6F8; padding: 16px;">
              <img src="${group27}" alt="UI Design" style="display: block; width: 100%; height: 460px; object-fit: cover;" />
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 23,
    title: 'User flow',
    content: `
      <div style="position: relative; width: 100%; margin: 0 auto; padding: 72px; border-radius: 32px; background-color: #21232a; display: flex; flex-direction: column; gap: 32px; box-sizing: border-box; text-align: left;">
        <div style="display: flex; flex-wrap: wrap; gap: 40px; align-items: flex-start;">
          <div style="flex: 1 1 320px; display: flex; flex-direction: column; gap: 24px;">
            <h2 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 48px; font-weight: 700; color: #fcf3ea;">provider search</h2>
            <div style="display: flex; flex-direction: column; gap: 24px;">
              <div style="background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
                <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Browse by</h3>
                <ul style="margin: 0; padding-left: 0; list-style: none;">
                  <li style="margin-bottom: 12px; padding-left: 24px; position: relative; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;"><span style="position: absolute; left: 0; opacity: 0.6;">→</span>Specialty</li>
                  <li style="margin-bottom: 12px; padding-left: 24px; position: relative; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;"><span style="position: absolute; left: 0; opacity: 0.6;">→</span>Location</li>
                  <li style="margin-bottom: 12px; padding-left: 24px; position: relative; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;"><span style="position: absolute; left: 0; opacity: 0.6;">→</span>Network</li>
                </ul>
              </div>
              <div style="background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
                <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Clear network indicators</h3>
                <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Implemented a clear visual system to show the user who is in network vs who is out</p>
              </div>
            </div>
          </div>
          <div style="flex: 1 1 460px; display: flex; justify-content: center; align-items: flex-start;">
            <div style="width: 100%; overflow: hidden; border-radius: 24px; border: 1px solid rgba(98, 108, 143, 0.2);">
              <img src="${ps1}" alt="User flow diagram" style="display: block; width: 100%; height: auto;" />
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 24,
    title: 'User flow',
    content: `
      <div style="position: relative; width: 100%; margin: 0 auto; padding: 72px; border-radius: 32px; background-color: #21232a; display: flex; flex-direction: column; gap: 32px; box-sizing: border-box; text-align: left;">
        <div style="display: flex; flex-wrap: wrap; gap: 40px; align-items: flex-start;">
          <div style="flex: 1 1 320px; display: flex; flex-direction: column; gap: 24px;">
            <h2 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 48px; font-weight: 700; color: #fcf3ea;">provider search</h2>
            <div style="display: flex; flex-direction: column; gap: 24px;">
              <div style="background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
                <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Filtering</h3>
                <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Easy to use filtering, giving the user control to browse or search confidently</p>
              </div>
              <div style="background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
                <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Familiarity</h3>
                <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Familiar design patterns to search or Browse by location</p>
              </div>
              <div style="background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
                <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">No dead ends</h3>
                <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">One key improvement was giving the user support with their search, and ensuring they never hit a "dead end"</p>
              </div>
            </div>
          </div>
          <div style="flex: 1 1 460px; display: flex; justify-content: center; align-items: flex-start;">
            <div style="width: 100%; overflow: hidden; border-radius: 24px; border: 1px solid rgba(98, 108, 143, 0.2);">
              <img src="${ps2}" alt="User flow diagram" style="display: block; width: 100%; height: auto;" />
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 25,
    title: 'User flow',
    content: `
      <div style="position: relative; width: 100%; margin: 0 auto; padding: 72px; border-radius: 32px; background-color: #21232a; display: flex; flex-direction: column; gap: 32px; box-sizing: border-box; text-align: left;">
        <div style="display: flex; flex-wrap: wrap; gap: 40px; align-items: flex-start;">
          <div style="flex: 1 1 320px; display: flex; flex-direction: column; gap: 24px;">
            <h2 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 48px; font-weight: 700; color: #fcf3ea;">Balance bills</h2>
            <div style="display: flex; flex-direction: column; gap: 24px;">
              <div style="background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
                <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Clear status</h3>
                <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Color is used to indicate type of issue, and layout is used to manage open vs closed issues</p>
              </div>
              <div style="background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
                <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">User control</h3>
                <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">The user now can upload, view, manage, and take action on their balance bills</p>
              </div>
            </div>
          </div>
          <div style="flex: 1 1 460px; display: flex; justify-content: center; align-items: flex-start;">
            <div style="width: 100%; overflow: hidden; border-radius: 24px; border: 1px solid rgba(98, 108, 143, 0.2);">
              <img src="${ps3}" alt="User flow diagram" style="display: block; width: 100%; height: auto;" />
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 26,
    title: 'User flow',
    content: `
      <div style="position: relative; width: 100%; margin: 0 auto; padding: 72px; border-radius: 32px; background-color: #21232a; display: flex; flex-direction: column; gap: 32px; box-sizing: border-box; text-align: left;">
        <div style="display: flex; flex-wrap: wrap; gap: 40px; align-items: flex-start;">
          <div style="flex: 1 1 320px; display: flex; flex-direction: column; gap: 24px;">
            <h2 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 48px; font-weight: 700; color: #fcf3ea;">Balance bills</h2>
            <div style="display: flex; flex-direction: column; gap: 24px;">
              <div style="background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
                <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Communication</h3>
                <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Communication can take place directly inside of a balance bill, allowing both Occunet and the member to get questions answered and resolve bills more efficiently</p>
              </div>
              <div style="background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
                <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Attachments:</h3>
                <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">As the bill resolution process evolves, members often need to add supporting documentation. In contrast to the previous manual process, members can now upload documents directly to the open issue</p>
              </div>
            </div>
          </div>
          <div style="flex: 1 1 460px; display: flex; justify-content: center; align-items: flex-start;">
            <div style="width: 100%; overflow: hidden; border-radius: 24px; border: 1px solid rgba(98, 108, 143, 0.2);">
              <img src="${ps4}" alt="User flow diagram" style="display: block; width: 100%; height: auto;" />
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 27,
    title: 'Member portal prototype',
    content: `
      <div style="position: relative; width: 100%; margin: 0 auto; padding: 72px; border-radius: 32px; background-color: #21232a; display: flex; flex-direction: column; gap: 32px; box-sizing: border-box; text-align: left;">
        <h2 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 48px; font-weight: 700; color: #fcf3ea;">Member portal prototype</h2>
        <div style="width: 100%; overflow: hidden; border-radius: 24px; border: 1px solid rgba(98, 108, 143, 0.2); position: relative; padding-bottom: 56.25%; height: 0; background-color: #D1E6FE;">
          <iframe src="https://player.vimeo.com/video/1103933469" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 24px;"></iframe>
        </div>
      </div>
    `
  },
  {
    id: 28,
    title: 'Results',
    content: `
      <div style="position: relative; width: 100%; margin: 0 auto; padding: 72px; border-radius: 32px; background-color: #21232a; display: flex; flex-direction: column; gap: 32px; box-sizing: border-box; text-align: left;">
        <h2 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 48px; font-weight: 700; color: #fcf3ea;">Results</h2>
        <div style="display: flex; flex-wrap: wrap; gap: 40px; align-items: flex-start;">
          <div style="flex: 1 1 calc(50% - 20px); min-width: 300px; display: flex; flex-direction: column; gap: 24px;">
            <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Business Wins</h3>
            <div style="display: flex; flex-direction: column; gap: 24px;">
              <div style="background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
                <h4 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">61% improvement in search conversion</h4>
                <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Searches in the app saw a steep decline in the amount of searches that did not result in an action. This is largely due to offering search refinement suggestions when searches yield no results.</p>
              </div>
              <div style="background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
                <h4 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">38% improvement in zero-result searches</h4>
                <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Searches that yielded no results were also improved. This is largely due to expanded user control through filtering, and an updated provider database.</p>
              </div>
              <div style="background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
                <h4 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Member support demand reduction</h4>
                <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Support usually meant Occunet on the phone helping members through the problem. Balance bill and provider search support needs were reduced by allowing for self-service of these common issues.</p>
              </div>
            </div>
          </div>
          <div style="flex: 1 1 calc(50% - 20px); min-width: 300px; display: flex; flex-direction: column; gap: 24px;">
            <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">User Wins</h3>
            <div style="display: flex; flex-direction: column; gap: 24px;">
              <div style="background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
                <h4 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Control</h4>
                <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Members are now empowered to upload, manage, and track their balance bills without having to call support. They can also find in-network providers themselves.</p>
              </div>
              <div style="background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
                <h4 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Transparency</h4>
                <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Members now have better idea of what providers are in-network, and where their balance bills stand in the process.</p>
              </div>
              <div style="background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
                <h4 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Confidence</h4>
                <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Members can search, make appointments, and undergo procedures with peace of mind knowing whether or not providers are in-network.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 29,
    title: 'Results',
    content: `
      <div style="position: relative; width: 100%; margin: 0 auto; padding: 72px; border-radius: 32px; background-color: #21232a; display: flex; flex-direction: column; gap: 32px; box-sizing: border-box; text-align: left;">
        <h2 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 48px; font-weight: 700; color: #fcf3ea;">Results</h2>
        <div style="width: 100%; max-width: 90%; margin: 0 auto; overflow: hidden; border-radius: 24px; border: 1px solid rgba(98, 108, 143, 0.2); background-color: #E8DDFA;">
          <img src="https://cdn.prod.website-files.com/63991917e6746369a799b04e/68f870a189687811636d4171_Quextwrap.png" alt="Results" style="display: block; width: 100%; height: auto;" />
              </div>
        <div style="display: flex; gap: 12px; width: 100%; flex-wrap: nowrap;">
          <div style="flex: 1 1 0; background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
            <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Improved communication</h3>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Enabled clear, two-way communication between residents and the front office throughout the service request process.</p>
              </div>
          <div style="flex: 1 1 0; background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
            <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Increased transparency</h3>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Provided real-time visibility into request status, updates, and completion, creating trust and reducing uncertainty.</p>
              </div>
          <div style="flex: 1 1 0; background: linear-gradient(180deg, rgba(24, 27, 38, 0.7) 0%, rgba(18, 20, 29, 0.95) 100%); border-radius: 24px; padding: 32px; border: 1px solid rgba(98, 108, 143, 0.2); display: flex; flex-direction: column; gap: 16px;">
            <h3 style="margin: 0; font-family: 'PP Formula', sans-serif; font-size: 24px; font-weight: 700; color: #f4c0bf;">Improved efficiency</h3>
            <p style="margin: 0; font-family: 'Sora', sans-serif; font-size: 18px; line-height: 1.3; color: rgba(252, 243, 234, 0.85); max-width: 38ch;">Unified workflows for maintenance and property staff, reducing delays and manual tracking while speeding up issue resolution.</p>
            </div>
          </div>
              </div>
    `
  }
]

// Set page metadata
useHead({
  title: 'Portfolio Review - Jeremy Giovannetti',
  meta: [
    { name: 'description', content: 'Product Designer Portfolio Review' }
  ]
})
</script>

<style scoped>
.slide-deck-page {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
