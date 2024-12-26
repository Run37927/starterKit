'use client'
import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

// TODO: change company name
function TermsofService() {
    const router = useRouter();

    return (
        <div className='max-w-md flex mx-auto flex-col items-center justify-center'>
            <div className='flex w-full items-center my-8'>
                <ChevronLeft className='h-8 w-8 cursor-pointer' onClick={() => router.back()} />
                <h1 className='text-3xl font-medium mx-auto'>Terms and Conditions</h1>
            </div>
            <p className='mb-8 px-8 md:px-0'>
                1. Introduction<br />
                By using YourCompany, you confirm your acceptance of, and agree to be bound by, these terms and conditions.
                <br /><br />
                2. Agreement to Terms and Conditions<br />
                This Agreement takes effect on the date on which you first use YourCompany application.
                <br /><br />
                3. Unlimited Access Software License with Termination Rights<br />
                YourCompany Software License facilitates the acquisition of YourCompany software through a single purchase, granting users unrestricted and perpetual access to its comprehensive functionalities. Tailored for independent creators, entrepreneurs, and small businesses, YourCompany empowers users to create compelling web pages and online portfolios.
                This license entails a straightforward and flexible arrangement, exempting users from recurring fees or subscriptions. However, it is important to acknowledge that the licensor retains the right to terminate the license without conditions or prerequisites. This termination provision enables the licensor to exercise control over software distribution and utilization.
                Opting for YourCompany Software License enables users to enjoy the benefits of the software while recognizing the licensor's unrestricted termination rights, which provide adaptability and address potential unforeseen circumstances.
                <br /><br />
                4. Refunds<br />
                No refunds. All sales are final.
                <br /><br />
                5. Disclaimer<br />
                It is not warranted that YourCompany will meet your requirements or that its operation will be uninterrupted or error-free. All express and implied warranties or conditions not stated in this Agreement (including without limitation, loss of profits, loss or corruption of data, business interruption, or loss of contracts), so far as such exclusion or disclaimer is permitted under applicable law, are excluded and expressly disclaimed. This Agreement does not affect your statutory rights.
                <br /><br />
                6. Warranties and Limitation of Liability<br />
                YourCompany does not give any warranty, guarantee, or other term as to the quality, fitness for purpose, or otherwise of the software. YourCompany shall not be liable to you by reason of any representation (unless fraudulent), or any implied warranty, condition or other term, or any duty at common law, for any loss of profit or any indirect, special or consequential loss, damage, costs, expenses or other claims (whether caused by YourCompany's negligence or the negligence of its servants or agents or otherwise) which arise out of or in connection with the provision of any goods or services by YourCompany. YourCompany shall not be liable or deemed to be in breach of contract by reason of any delay in performing, or failure to perform, any of its obligations if the delay or failure was due to any cause beyond its reasonable control. Notwithstanding contrary clauses in this Agreement, in the event that YourCompany is deemed liable to you for breach of this Agreement, you agree that YourCompany's liability is limited to the amount actually paid by you for your services or software, which amount calculated in reliance upon this clause. You hereby release YourCompany from any and all obligations, liabilities, and claims in excess of this limitation.
                <br /><br />
                7. Responsibilities<br />
                YourCompany is not responsible for what the user does with the user-generated content.
                <br /><br />
                8. General Terms and Law<br />
                This Agreement is governed by the laws of Canada. You acknowledge that no joint venture, partnership, employment, or agency relationship exists between you and YourCompany as a result of your use of these services. You agree not to hold yourself out as a representative, agent, or employee of YourCompany. You agree that YourCompany will not be liable by reason of any representation, act, or omission to act by you.
                <br /><br />
                Last updated: June 10 2024.
            </p>
        </div>
    )
}

export default TermsofService