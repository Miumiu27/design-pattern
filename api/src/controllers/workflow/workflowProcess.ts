import WorkflowTemplate from './workflowTemplate';

class WorkflowProcess extends WorkflowTemplate {
  protected start(): void {
    console.log('Starting workflow process');
  }

  protected execute(): void {
    console.log('Executing workflow process');
  }

  protected end(): void {
    console.log('Ending workflow process');
  }
}

export default WorkflowProcess;
