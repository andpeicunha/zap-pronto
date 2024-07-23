import { Text } from '@/components/ui/title'
import CardRegisterPhone from './cardRegisterNumber'
import CardScheduleMessage from './cardScheduleMessage'
import CardSendMessage from './cardSendMessage'

function RegisterPanel() {
	return (
		<section className="ml-10 mt-5 h-max w-auto grid grid-cols-3 pr-3 space-y-3">
			<Text type={'h2'} className="col-span-full">
				Painel Pincipal
			</Text>
			<div className="col-span-full mt-6">
				<CardRegisterPhone />
			</div>
			<div className="col-span-full mt-6">
				<CardSendMessage />
			</div>
			<div className="col-span-2">
				<CardScheduleMessage />
			</div>
		</section>
	)
}

export default RegisterPanel
