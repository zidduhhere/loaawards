import { useEffect } from "react";

interface TermsOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsOverlay({ isOpen, onClose }: TermsOverlayProps) {
  // Prevent scrolling on the body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-loa-black/80 backdrop-blur-md">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-5xl max-h-full bg-loa-white border-4 border-loa-black shadow-[12px_12px_0px_#0A0A0A] md:shadow-[20px_20px_0px_#0A0A0A] rounded-xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b-4 border-loa-black bg-loa-yellow px-6 py-4 md:px-10 md:py-6">
          <h2 
            className="text-3xl md:text-5xl lg:text-6xl text-loa-black uppercase leading-none tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Terms & Conditions
          </h2>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-loa-pink border-4 border-loa-black rounded hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-4px_4px_0px_#0A0A0A] transition-all duration-200"
            aria-label="Close modal"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-loa-black w-6 h-6 md:w-8 md:h-8">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-6 py-8 md:px-12 md:py-12 flex flex-col gap-10 font-body text-loa-black bg-[#F4F4F0]">
          
          <section className="flex flex-col gap-4">
            <h3 className="text-2xl md:text-3xl uppercase font-bold tracking-wider text-loa-purple border-b-2 border-loa-black/10 pb-2">Eligibility</h3>
            <div className="text-base md:text-lg leading-relaxed flex flex-col gap-4">
              <p>Work must have been released in India between <span className="font-bold">1 January 2025 and 31 March 2026</span>. Purely speculative proposals or unexecuted work are not eligible.</p>
              <p>Any entity involved in the creation of the campaign may enter the awards, subject to meeting the entry criteria. This includes advertising agencies, media agencies, clients, media houses, agency or client partners, production houses, design agencies, digital partners or individuals, as specified under each category. All entries submitted must include client details, including name, phone number and email address.</p>
              <p>Content creators and influencers may enter work under the Creator-Led Branded Content category. Agencies, individuals or students may submit entries under unpublished work categories.</p>
              <p>Students entering the awards must provide authorisation from the institution they are studying at.</p>
              <p>The Independent Creative Excellence category is open to individuals for non-branded work, celebrating outstanding independent ideas and creative expression across freelancers, in-house designers, studios and hotshops.</p>
              <p>Entrants are responsible for obtaining the necessary permission or approval from the brand/client before submitting work to the LOA Awards. By entering the LOA Awards, all entrants are deemed to have agreed to abide by the Rules and Regulations of the Love of Advertising Awards by the Advertising Club Trivandrum.</p>
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl uppercase font-bold tracking-wider text-loa-purple border-b-2 border-loa-black/10 pb-2">Media Requirements</h3>
            
            <div className="flex flex-col gap-3">
              <h4 className="text-xl font-bold uppercase tracking-widest text-loa-black bg-loa-yellow/30 inline-block px-2 py-1 w-fit">Print, Print Craft, Outdoor, Digital - Static</h4>
              <ul className="list-disc list-outside ml-6 space-y-2 text-base md:text-lg">
                <li>The files uploaded must be in jpeg format. File size should not be more than 10 MB.</li>
                <li>In the case of Outdoor, pictures of the actual installation, in addition to the creative in JPEG format should be submitted.</li>
                <li>In case of social media, URL to be submitted and where the pages are not available any more the screen grabs need to be uploaded.</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-xl font-bold uppercase tracking-widest text-loa-black bg-loa-yellow/30 inline-block px-2 py-1 w-fit">Design</h4>
              <ul className="list-disc list-outside ml-6 space-y-2 text-base md:text-lg">
                <li>Design entries uploaded must be in jpeg/pdf format. File size should not be more than 10 MB.</li>
                <li>Brochures, Calendars, Packaging have to be submitted in the finished form in JPEG format as mock versions/ photographs along with a combined PDF of all individual pages, optimized for reading. Mock videos shall be uploaded and must be in mp4 format (not more than 3 minutes). File size should not be more than 100 MB.</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-xl font-bold uppercase tracking-widest text-loa-black bg-loa-yellow/30 inline-block px-2 py-1 w-fit">TVC, Digital Videos, Video Craft</h4>
              <p className="text-base md:text-lg">Videos uploaded must be in mp4 format. File size should not be more than 200 MB.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-xl font-bold uppercase tracking-widest text-loa-black bg-loa-yellow/30 inline-block px-2 py-1 w-fit">Audio & Radio</h4>
              <p className="text-base md:text-lg">Audio Spots uploaded must be in mp3 format. File size should not be more than 100MB.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-xl font-bold uppercase tracking-widest text-loa-black bg-loa-yellow/30 inline-block px-2 py-1 w-fit">Integrated</h4>
              <p className="text-base md:text-lg leading-relaxed">The Integrated category has been instituted to promote and encourage 360-degree communication in different major media across various touch points. This award will be judged on how well different pieces of work from different media (minimum 3 media) integrate with the central idea of the entry. JPEGs/PDF/MP4/MP3 formats shall be uploaded.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-xl font-bold uppercase tracking-widest text-loa-black bg-loa-yellow/30 inline-block px-2 py-1 w-fit">Digital</h4>
              <p className="text-base md:text-lg leading-relaxed">URL is a must. In case of social media where the pages are not available any more the screen grabs need to be uploaded.</p>
            </div>
            
            <div className="flex flex-col gap-3 p-4 bg-white border-2 border-loa-black rounded-lg shadow-[4px_4px_0px_#0A0A0A]">
              <p className="text-base md:text-lg leading-relaxed"><span className="font-bold">General Note:</span> For all the entries, you may also upload a case film of not more than 3 minutes to strengthen the presentation. Videos uploaded must be in mp4 format (not more than 3 minutes). File size should not be more than 100 MB.</p>
              <p className="text-base md:text-lg leading-relaxed"><span className="font-bold">Entry Translations:</span> For entries not in English please provide an English language translation. For video uploads, please provide a subtitled version of the video, ideally. Else, use the “English Translations” section of the entry form to add translations.</p>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h3 className="text-2xl md:text-3xl uppercase font-bold tracking-wider text-loa-purple border-b-2 border-loa-black/10 pb-2">Fees</h3>
            <ul className="list-none space-y-3 text-base md:text-lg font-medium">
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-loa-pink rounded-full"></span> Single Entry (one piece of creative work): <span className="font-bold bg-loa-pink/20 px-2 py-1 rounded">₹3,000 per entry</span></li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-loa-pink rounded-full"></span> Campaign Entry (maximum 3 pieces): <span className="font-bold bg-loa-pink/20 px-2 py-1 rounded">₹6,000 per campaign</span></li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-loa-pink rounded-full"></span> Integrated Campaign Entry (maximum 5 pieces): <span className="font-bold bg-loa-pink/20 px-2 py-1 rounded">₹9,000 per campaign</span></li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-loa-pink rounded-full"></span> Student Category Entry: <span className="font-bold bg-loa-pink/20 px-2 py-1 rounded">₹2,000 per entry</span></li>
            </ul>
            <div className="text-base md:text-lg leading-relaxed flex flex-col gap-4 mt-2">
              <p className="font-bold text-loa-red bg-loa-red/10 p-3 rounded border border-loa-red/20">All fees are exclusive of 18% GST, which must be added while making the payment.</p>
              <p>Payment can be made via Cheque, Demand Draft, NEFT, RTGS, IMPS, or UPI in favour of Advertising Club Trivandrum, payable at Trivandrum.</p>
              <div className="bg-white border-2 border-loa-black p-6 rounded-lg shadow-[6px_6px_0px_#0A0A0A] flex flex-col gap-2">
                <p className="font-bold uppercase tracking-widest text-sm text-loa-black/50 mb-2">Online transfers should be made to:</p>
                <div className="grid grid-cols-[100px_1fr] md:grid-cols-[140px_1fr] gap-2">
                  <span className="font-bold">Name:</span> <span>Advertising Club Trivandrum</span>
                  <span className="font-bold">Bank:</span> <span>State Bank Of India</span>
                  <span className="font-bold">Branch:</span> <span>Vazhuthacaud</span>
                  <span className="font-bold">A/c:</span> <span>43758769178</span>
                  <span className="font-bold">IFSC Code:</span> <span>SBIN0070033</span>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h3 className="text-2xl md:text-3xl uppercase font-bold tracking-wider text-loa-purple border-b-2 border-loa-black/10 pb-2">General Rules & Regulations</h3>
            <ul className="list-decimal list-outside ml-6 space-y-4 text-base md:text-lg leading-relaxed">
              <li>Entries must be for released work created for real clients only, except in the "Unpublished Work" category.</li>
              <li>Student category entries must be accompanied by a certificate from the Head of the Educational Institution. Entries without the certificate may be disqualified.</li>
              <li>The work must have been released between <span className="font-bold">1 January 2025 and 31 March 2026</span>.</li>
              <li>The deadline for <span className="font-bold">Early Bird Entries is 18 July 2026</span>, and the deadline for <span className="font-bold">Regular Entries is 17 August 2026</span>.</li>
              <li>Incomplete or incorrect entry forms are liable to be disqualified. No refund will be provided for disqualified entries.</li>
              <li>Entries may be submitted in more than one category or sub-category.</li>
              <li>After completing the submission, payment may be made only through IMPS, NEFT, or UPI directly to Advertising Club Trivandrum, or through Cheque/DD drawn in favour of Advertising Club Trivandrum. If a single cheque or DD covers multiple entries, a clear statement listing the entries covered must be attached.</li>
              <li>Submission of entries must be completed in all respects, including payment, on or before the deadline. Entries for which payment is received after the deadline will not be considered for judging.</li>
              <li>No case studies, print materials, videos, or supporting documents should contain the agency logo, founder's name, team member names, photographs, or any other identifying information. Any such material will be disqualified.</li>
              <li>The entries submitted across all categories will be scrutinized for authenticity. The ACT Awards Committee reserves the right to reject any entry without assigning a reason. Entry fees for rejected entries will not be refunded.</li>
              <li>The ACT Awards Committee reserves the right to extend the submission deadline. However, participants are advised to adhere to the published deadlines, as late submissions may be disqualified.</li>
              <li>In each category, outstanding entries may be awarded Cyan, Magenta, or Yellow, corresponding to Gold, Silver, and Bronze respectively. Awards are conferred only on entries that meet the required standards, and multiple entries may receive the same award level if they qualify. If no entry meets the required standards, no award may be presented.</li>
              <li>In case of any discrepancy or clarification required regarding an entry, the participating organisation may be contacted for verification. The decisions of the judges shall be final.</li>
              <li>Every entry is accepted only on the condition that, by submitting the work, the entrant certifies that they have read, understood, and accepted all the rules and conditions stated herein and that the entry fully complies with them.</li>
              <li>All entries become the property of Advertising Club Trivandrum and will not be returned. The ACT Awards Committee may verify any submitted work if required. By entering, participants grant the ACT Awards Committee the right to use, reproduce, publish, and make available any submitted material for educational, archival, promotional, and reference purposes, including electronic publishing.</li>
              <li>In each category, outstanding entries may be awarded Cyan, Magenta, or Yellow, corresponding to Gold, Silver, and Bronze respectively. Awards are conferred only on entries that meet the required standards, and multiple entries may receive the same award level if they qualify. If no entry meets the required standards, no award may be presented.</li>
              <li>Points earned through these awards will contribute towards the Agency of the Year and Brand of the Year titles, with Cyan carrying 15 points, Magenta 7 points, Yellow 3 points, and Shortlisted entries 1 point. The overall winners of Agency of the Year and Brand of the Year will be honoured with the prestigious Black Award. The jury's decision in this regard shall be final.</li>
              <li>The decision of the jury on all matters relating to judging, qualifications, and categorisation shall be final. The ACT Awards Committee reserves the right to disqualify any entry at its sole discretion, and its decision shall be final.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
