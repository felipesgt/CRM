namespace Domain.Dtos
{
    public class PagedInput
    {
     public int SkipCount { get; set; }
     public int TakeCount { get; set; } = 10;
    }
}