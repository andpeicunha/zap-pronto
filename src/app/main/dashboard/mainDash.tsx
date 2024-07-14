import { Button, Card } from '@/components/ui';
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Text } from '../../../components/ui/title';

function RegisterPanel() {
  return (
    <section className="ml-10 mt-5 h-auto w-auto">
      <Text type={'h2'}>Painel Pincipal</Text>
      <div>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

export default RegisterPanel;
