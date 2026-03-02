import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import Challenges from './pages/Challenges';
import ChallengeDetail from './pages/ChallengeDetail';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';
import UserEdit from './pages/UserEdit';
import Plans from './pages/Plans';
import PlanDetail from './pages/PlanDetail';
import PlanEdit from './pages/PlanEdit';
import ReorderPhases from './pages/ReorderPhases';
import Accounts from './pages/Accounts';
import CreateAccount from './pages/CreateAccount';
import TradingObjectives from './pages/TradingObjectives';
import Helpdesk from './pages/Helpdesk';
import ContestPrograms from './pages/ContestPrograms';
import CreateContest from './pages/CreateContest';
import WithdrawalsOverview from './pages/WithdrawalsOverview';
import WithdrawalRequests from './pages/WithdrawalRequests';
import EmailSettings from './pages/setup/EmailSettings';
import EmailTemplates from './pages/setup/EmailTemplates';
import EmailDepartments from './pages/setup/EmailDepartments';
import AccountSizes from './pages/setup/AccountSizes';
import TradingInstruments from './pages/setup/TradingInstruments';
import UserDashboardTemplates from './pages/setup/UserDashboardTemplates';
import CustomMenu from './pages/setup/CustomMenu';
import PersonalNotifications from './pages/setup/PersonalNotifications';
import SystemNotifications from './pages/setup/SystemNotifications';
import AccountsLeaderboard from './pages/leaderboard/AccountsLeaderboard';
import ContestsLeaderboard from './pages/leaderboard/ContestsLeaderboard';
import EditLeaderboard from './pages/leaderboard/EditLeaderboard';
import VisitorStatistics from './pages/VisitorStatistics';
import IssuedCertificates from './pages/IssuedCertificates';
import GeneralCertificateTemplates from './pages/certificates/GeneralCertificateTemplates';
import ChallengeCertificateTemplates from './pages/certificates/ChallengeCertificateTemplates';
import CreateCertificateTemplate from './pages/certificates/CreateCertificateTemplate';
import CreateChallengeCertificateTemplate from './pages/certificates/CreateChallengeCertificateTemplate';
import BtcPayGateways from './pages/payment-gateways/BtcPayGateways';
import CreateBtcPayGateway from './pages/payment-gateways/CreateBtcPayGateway';
import CoinPaymentsGateways from './pages/payment-gateways/CoinPaymentsGateways';
import CreateCoinPaymentsGateway from './pages/payment-gateways/CreateCoinPaymentsGateway';
import SqalaGateways from './pages/payment-gateways/SqalaGateways';
import CreateSqalaGateway from './pages/payment-gateways/CreateSqalaGateway';
import LetKnowPayGateways from './pages/payment-gateways/LetKnowPayGateways';
import CreateLetKnowPayGateway from './pages/payment-gateways/CreateLetKnowPayGateway';
import CoinGateGateways from './pages/payment-gateways/CoinGateGateways';
import CreateCoinGateGateway from './pages/payment-gateways/CreateCoinGateGateway';
import FakeGateways from './pages/payment-gateways/FakeGateways';
import CreateFakeGateway from './pages/payment-gateways/CreateFakeGateway';
import PaymentTransactions from './pages/PaymentTransactions';
import DashboardSettings from './pages/DashboardSettings';
import ChallengeReports from './pages/reports/ChallengeReports';

// Placeholder pages for navigation links that don't have implementations yet
const Placeholder = ({ title }) => (
  <div className="glass-panel p-10 rounded-2xl flex flex-col items-center justify-center min-h-[400px]">
    <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
    <p className="text-text-muted">This module is under development.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/challenges" element={<Challenges />} />
              <Route path="/challenges/:id" element={<ChallengeDetail />} />
              <Route path="/reports/challenges" element={<ChallengeReports />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/:id" element={<UserDetail />} />
              <Route path="/users/:id/edit" element={<UserEdit />} />
              <Route path="/plans" element={<Plans />} />
              <Route path="/plans/:id" element={<PlanDetail />} />
              <Route path="/plans/:id/edit" element={<PlanEdit />} />
              <Route path="/reorder-phases" element={<ReorderPhases />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/accounts/new" element={<CreateAccount />} />
              <Route path="/trading-objectives" element={<TradingObjectives />} />
              <Route path="/helpdesk" element={<Helpdesk />} />
              <Route path="/contests" element={<ContestPrograms />} />
              <Route path="/contests/new" element={<CreateContest />} />
              <Route path="/contests/:id" element={<CreateContest />} />
              <Route path="/withdrawals/overview" element={<WithdrawalsOverview />} />
              <Route path="/withdrawals/requests" element={<WithdrawalRequests />} />
              <Route path="/withdrawals/*" element={<Placeholder title="Withdrawals" />} />
              <Route path="/setup/email-settings" element={<EmailSettings />} />
              <Route path="/setup/email-templates" element={<EmailTemplates />} />
              <Route path="/setup/email-departments" element={<EmailDepartments />} />
              <Route path="/setup/account-sizes" element={<AccountSizes />} />
              <Route path="/setup/broker-symbols" element={<TradingInstruments />} />
              <Route path="/setup/user-templates" element={<UserDashboardTemplates />} />
              <Route path="/setup/custom-menu" element={<CustomMenu />} />
              <Route path="/setup/personal-notifications" element={<PersonalNotifications />} />
              <Route path="/setup/system-notifications" element={<SystemNotifications />} />
              <Route path="/setup/*" element={<Placeholder title="Setup" />} />
              <Route path="/leaderboard-setups/accounts" element={<AccountsLeaderboard />} />
              <Route path="/leaderboard-setups/contests" element={<ContestsLeaderboard />} />
              <Route path="/leaderboard-setups/new" element={<EditLeaderboard />} />
              <Route path="/leaderboard-setups/:id/edit" element={<EditLeaderboard />} />
              <Route path="/leaderboard-setups/*" element={<Placeholder title="Leaderboard Setups" />} />
              <Route path="/visitor-statistics" element={<VisitorStatistics />} />
              <Route path="/issued-certificates" element={<IssuedCertificates />} />
              <Route path="/certificate-templates/general" element={<GeneralCertificateTemplates />} />
              <Route path="/certificate-templates/general/new" element={<CreateCertificateTemplate />} />
              <Route path="/certificate-templates/challenge-completion" element={<ChallengeCertificateTemplates />} />
              <Route path="/certificate-templates/challenge-completion/new" element={<CreateChallengeCertificateTemplate />} />
              <Route path="/certificate-templates/*" element={<Placeholder title="Certificate Templates" />} />
              <Route path="/payment-gateways/btcpay" element={<BtcPayGateways />} />
              <Route path="/payment-gateways/btcpay/new" element={<CreateBtcPayGateway />} />
              <Route path="/payment-gateways/coinpayments" element={<CoinPaymentsGateways />} />
              <Route path="/payment-gateways/coinpayments/new" element={<CreateCoinPaymentsGateway />} />
              <Route path="/payment-gateways/sqala" element={<SqalaGateways />} />
              <Route path="/payment-gateways/sqala/new" element={<CreateSqalaGateway />} />
              <Route path="/payment-gateways/letknowpay" element={<LetKnowPayGateways />} />
              <Route path="/payment-gateways/letknowpay/new" element={<CreateLetKnowPayGateway />} />
              <Route path="/payment-gateways/coingate" element={<CoinGateGateways />} />
              <Route path="/payment-gateways/coingate/new" element={<CreateCoinGateGateway />} />
              <Route path="/payment-gateways/fake" element={<FakeGateways />} />
              <Route path="/payment-gateways/fake/new" element={<CreateFakeGateway />} />
              <Route path="/payment-gateways/*" element={<Placeholder title="Payment Gateways" />} />
              <Route path="/payment-transactions" element={<PaymentTransactions />} />
              <Route path="/settings" element={<DashboardSettings />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
