abstract class WorkflowTemplate {
    public process(): void {
      this.start();
      this.execute();
      this.end();
    }
  
    protected abstract start(): void;
    protected abstract execute(): void;
    protected abstract end(): void;
  }
  
  export default WorkflowTemplate;
  