using Domain.Dtos.User;
using Domain.Models;
using AutoMapper;

namespace Api.CrossCutting.Mappings
{
    public class DtoToModelProfile : Profile
    {
        public DtoToModelProfile()
        {
            CreateMap<UserModel, UserDto>()
                .ReverseMap();
            CreateMap<UserModel, UserDtoCreateResult>()
                .ReverseMap();
            CreateMap<UserModel, UserDtoUpdateResult>()
                .ReverseMap();

        }

    }
}
